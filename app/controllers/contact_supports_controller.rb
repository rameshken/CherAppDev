# frozen_string_literal: true

class ContactSupportsController < ApplicationController
  before_action :ensure_valid_contact_params

  def create
    @prospect_user = ContactSupport.new(contact_params)
    if @prospect_user.valid?
      @prospect_user.save
      ContactRequestMailer.notify_cher(contact_params).deliver_later
      MixpanelTracker.track_event(contact_params[:email], 'Requested demo') unless contact_params[:track_demo].blank?
      flash[:notice] = t('flashes.contacts.create.success')
      redirect_back fallback_location: root_path
    else
      flash[:err_msg] = @prospect_user.errors.full_messages[0]
      redirect_to '/#contactUs'
    end
  end

  private

  def contact_params
    params.require(:contact_support)
          .permit(:name, :email, :phone, :city, :track_demo)
  end

  def ensure_valid_contact_params
    unless valid_contact_params?
      redirect_to root_url, notice: 'Please enter a valid value for city'
      return
    end
  end

  def valid_contact_params?
    GooglePlaces.is_valid?(contact_params[:city])
  end
end
