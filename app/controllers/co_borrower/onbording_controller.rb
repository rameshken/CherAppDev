# frozen_string_literal: true

module CoBorrower
  class OnbordingController < BaseController
    def show; end

    def homebuyers_landing
      puts"HI CHECK FOR DATABASE CHER APP PROJECT"
    redirect_to look_around_path if params[:search]
    respond_to do |format|
      format.html
      format.json do
        json_response = LookAround::PropertiesJsonResponseService.new(current_user, search_params).execute
      end
    end
    end
  end
end
