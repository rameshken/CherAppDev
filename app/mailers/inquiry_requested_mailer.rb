# frozen_string_literal: true

require 'csv'

class InquiryRequestedMailer < ApplicationMailer
  default from: 'cher@cher.app'

  def notify_admin(inquiry_params)
    @first_name = inquiry_params[:first_name]
    @middle_name = inquiry_params[:middle_name]
    @last_name = inquiry_params[:last_name]
    @date_of_birth = inquiry_params[:date_of_birth]
    mail(to: ENV['SUPPORT_MAIL'],
         subject: 'New inquiry requested')
  end

  def send_pending_requests_csv(users_who_requested_background_check)
    attachments['pending_background_check.csv'] = pending_inquiries_csv(users_who_requested_background_check)
    mail(to: ENV['SUPPORT_MAIL'], subject: 'Pending backgorund check report')
  end

  def send_weekly_cher_users_csv(paid_agents, agents, homebuyers)
    attachments['Cher-Paid-Agents.csv'] = weekly_cher_users_csv(paid_agents)
    attachments['Cher-Agents.csv'] = weekly_cher_users_csv(agents)
    attachments['Cher-Homebuyers.csv'] = weekly_cher_users_csv(homebuyers)
    mail(to: ApplicationHelper::TEAM_MEBERS_EMAIL + ['ramesh@entrans.io'], subject: 'Weekly Cher Users report-'"#{Date.today}")
  end

  private

  def pending_inquiries_csv(users_who_requested_background_check)
    CSV.generate(headers: true) do |csv|
      csv << ['First Name', 'Middle Name', 'Last Name', 'Date of birth']
      users_who_requested_background_check.each do |user|
        csv << [user.first_name, user.middle_name, user.last_name, user.date_of_birth&.strftime('%m/%d/%y')]
      end
    end
  end

  def weekly_cher_users_csv(users)
    CSV.generate(headers: true) do |csv|
      csv << ['First Name', 'Last Name', 'Email', 'Phone Number', 'City', 'Area']
      users.each do |u|
        csv << [u.first_name, u.last_name, u.email, u.phone_number, u.city, u.areas]
      end
    end
  end
end
