# frozen_string_literal: true

class SocialNetworksController < AuthenticationsController
  before_action :check_city, only: [:index]
  def index
    @suggested_matches = suggested_matches
    @friend_requests = FriendRequest.user_pending_requests(current_user.id)
    @friends = current_user.friends
    @popular_homes = TopPropertiesService.new(current_user, 3, suggested: true).execute.values.flatten
    @flagged_properties = @friends.each{|prop| prop.flagged_properties_data }
    if current_user.co_borrower?
      @agents = User.kept.agent.by_area(current_user.city).where.not(end_of_clique: nil).order("end_of_clique DESC")
      @non_premium_agents = User.kept.agent.by_area(current_user.city).where(end_of_clique: nil)
    end
    return unless params[:user]

    search_users
  end

  def messages
  end

  def network
    @requests = FriendRequest.user_pending_requests(current_user.id)
    @friend_requests = []
    @agent_requests = []
    @requests.each do |afr| 
      user = User.find_by(id: afr.requester_id)
      @agent_requests << user if user.role == 'agent'
      @friend_requests << user if user.role == 'co_borrower'
    end
    @suggested_matches = suggested_matches
    @mutual_friends = []
    @properties = []
    @requests.each do |user| 
      @mutual_friends << FriendRequest.users_are_friends?(current_user.id, user.id)
      @properties << User.find_by(id: user.requester_id).flagged_properties_data
    end 
  end

  def homebuyers
    @friends = current_user.friends
  end

  def suggestedbuyers
    @friend_requests = FriendRequest.user_pending_requests(current_user.id)
    @suggested_matches = suggested_matches
    @mutual_friends = []
    @properties = []
    @friend_requests.each do |user| 
      @mutual_friends << FriendRequest.users_are_friends?(current_user.id, user.id)
      @properties << User.find_by(id: user.requester_id).flagged_properties_data
    end 
  end

  def agents
    if params[:identifier]
      keyword = params[:identifier]
      # @agents = User.kept.agent.by_area(current_user.city).where("first_name ilike ?", "%#{keyword}%")
      @agents = User.kept.agent.all.where("first_name ilike ?", "%#{keyword}%") || User.kept.agent.all.where("last_name ilike ?", "%#{keyword}%")
      if keyword.include? "@"
        @agents = User.kept.agent.all.where("email ilike ?", "%#{keyword}%")
      elsif keyword.length >= 10
        @agents = User.kept.agent.all.where("phone_number ilike ?", "%#{keyword}%") 
      end
    else
      @agents = User.kept.agent.by_area(current_user.city).where.not(end_of_clique: nil).order("end_of_clique DESC")
      @non_premium_agents = User.kept.agent.by_area(current_user.city).where(end_of_clique: nil)
    end
  end

  def groups
    @flagged_properties = current_user.flagged_properties_data
    @friends = ActiveModelSerializers::SerializableResource.new(current_user.friends,
                                                                  each_serializer: UsersSerializer,
                                                                  scope: current_user).as_json
  end
  
  private

  def search_user_params
    params.require(:user)
          .permit(:identifier,
                  :verified,
                  :personality_test,
                  :background_check,
                  :limit)
  end

  def search_users
    @users = UsersFinderService.new(search_user_params, current_user).execute
    @search_for = search_user_params[:identifier]
    return if @users.any?

    @suggested_matches = suggested_matches
    @receiver = @search_for.match('^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})')
    flash[:alert] = t('flashes.multisearch.error', search: @search_for)
  end

  def check_city
    if current_user.city.blank?
      flash[:alert] = t('notifications.complete_profile_city')
      redirect_to edit_profile_path(@current_user)
    end
  end
end
