class RoomsController < AuthenticationsController

  def index
    @current_user = current_user
    # redirect_to '/signin' unless @current_user
    @rooms = Room.public_rooms
    if params[:identifier]
      keyword = params[:identifier]
      @users = User.all.where("first_name ilike ?", "%#{keyword}%") || User.all.where("last_name ilike ?", "%#{keyword}%")
      if keyword.include? "@"
        @users = User.all.where("email ilike ?", "%#{keyword}%")
      elsif keyword.length >= 10
        @users = User.all.where("phone_number ilike ?", "%#{keyword}%")
      end
    else
      @users = current_user.friends #User.all_except(@current_user)
    end
    @room = Room.new
    @agents = User.kept.agent.by_area(current_user.city).where.not(end_of_clique: nil).order("end_of_clique DESC")
  end

  def create
    @room = Room.create(name: params['room']['name'])
  end

  def show
    @current_user = current_user
    @single_room = Room.find(params[:id])
    @rooms = Room.public_rooms
    @users = current_user.friends #User.all_except(@current_user)
    @room = Room.new
    @message = Message.new
    @messages = @single_room.messages
    @agents = User.kept.agent.by_area(current_user.city).where.not(end_of_clique: nil).order("end_of_clique DESC")
    render 'index'
  end

  def homebuyers_landing_page
    redirect_to look_around_path if params[:search]
    respond_to do |format|
      format.html
      format.json do
        json_response = LookAround::PropertiesJsonResponseService.new(current_user, search_params).execute
      end
    end
  end
end
