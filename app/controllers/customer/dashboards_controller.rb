# frozen_string_literal: true

module Customer
  class DashboardsController < BaseController
    before_action :initialize_social_instances
    include FlaggedPropertiesConcern
    require 'carmen'
    include Carmen

    def show
      @states = Country.named('United States')
                       .subregions
                       .typed('state').map(&:code)
      @posts = FindLastNewsfeedPosts.new(current_user).execute
      @notifications = current_user.last_notifications
      @suggested_leads = suggested_leads
      @user_serialized = UsersSerializer.new(current_user, scope: current_user).as_json

      # respond_to do |format|
      #   format.html {}
      #   format.json do
      #     render json: @suggested_leads
      #   end
      # end
    end

    private

    def initialize_social_instances
      @publication = Publication.new
      @comment = Comment.new
      @like = Like.new
    end

    def suggested_leads
      city = current_user.city || "Santa Monica, CA."
      users = User.suggested_leads(current_user).in_area(city.split(",").first)
      users = users.search_keyword(params["search"]["search_by"], params["search"]["keyword"]) if params["search"].present?
      return users
    end
  end
end
