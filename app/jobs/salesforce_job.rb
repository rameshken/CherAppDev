class SalesforceJob < ApplicationJob	
  sidekiq_options queue: :default, retry: false
  
  def perform
    puts "SalesforceJob Running"
    
    sf_obj = Salesforce::Lead.new
    
    search_current = "(LastModifiedDate >= YESTERDAY AND LastModifiedDate <= TODAY)"
    
    sf_leads = sf_obj.query_all("SELECT Id, Name, Email, Company, Phone, Status, LastModifiedDate FROM Lead where #{search_current} ORDER BY LastModifiedDate DESC")
    sf_leads.each do |l|
      SalesForceContact.find_or_create_by(sf_id: l.Id, email:l.Email, name:l.Name, phone_number:l.Phone, provider:l.Company, status:l.Status)
    end
  end
end