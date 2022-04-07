# frozen_string_literal: true

namespace :salesforce_job do
  task fetch_from_salesforce: :environment do
    SalesforceJob.perform_later
  end
end