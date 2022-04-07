# frozen_string_literal: true

namespace :background_check do
  task users_who_requested_background_check: :environment do
    users = User.where(background_check_status: :pending)
    InquiryRequestedMailer.send_pending_requests_csv(users).deliver_now if users.any?
  end

  task weekly_cher_users_check: :environment do
    paid_agents = User.agent.where('end_of_clique >= ? AND (email NOT LIKE ? AND email NOT LIKE ? AND email NOT LIKE ?)', Date.today, "%michelada.io%", "%cher.app%", "%test%")
    agents = User.agent.where('end_of_clique < ? OR end_of_clique = ? AND (email NOT LIKE ? AND email NOT LIKE ? AND email NOT LIKE ?)', Date.today, nil, "%michelada.io%", "%cher.app%", "%test%")
    homebuyers = User.where('role = ? AND (email NOT LIKE ? AND email NOT LIKE ? AND email NOT LIKE ?)', 0, "%michelada.io%", "%cher.app%", "%test%")
    InquiryRequestedMailer.send_weekly_cher_users_csv(paid_agents, agents, homebuyers).deliver_now if (paid_agents.any? or agents.any? or homebuyers.any?)
  end

  # task home_buyers_subscribe: :environment do
  #   users = User.includes(:contact).where(role: :co_borrower)
  #   to_emails = []
  #   users.each do |e| 
  #     to_emails << e.email
  #     # mail from: SENDER_EMAIL, to: ['rameshkbdm@gmail.com', 'paul@cher.app'], subject: 'Get $15 for 15 minutes of your time - only 3 spots left!'
  #     # mail from: SENDER_EMAIL, to: e.email, subject: 'Get $15 for 15 minutes of your time - only 3 spots left!'
      # ActivityMailer.home_buyers_newsletter_subscribe(e.email).deliver_now
  #   end
  # end
end
