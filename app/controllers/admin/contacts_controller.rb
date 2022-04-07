# frozen_string_literal: true

require 'csv'

module Admin
  class ContactsController < BaseController
    def create
      respond_to do |format|
        format.csv do
          if uploaded_file_is_valid?
            CSV.foreach(@contacts_file, headers: true) do |contact|
              ContactJob.perform_later(email: contact['email'],
                                       role: contact['role'],
                                       first_name: contact['first_name'],
                                       city: contact['city'])
            end
          end
          flash[:notice] = t('flashes.contacts.create_csv.notice')
          redirect_to admin_contacts_path
        end
      end
    end

    def index
      @contacts = contacts

      respond_to do |format|
        format.html {}
        format.csv do
          headers['Content-Disposition'] = 'attachment; filename=contacts.csv'
          headers['Content-Type'] ||= 'text/csv'
        end
      end
    end

    def sfindex
      sf_contacts = sf_contacts_by_filter_param
      @sf_contacts = sf_contacts
      puts "========================"
      respond_to do |format|
        format.html {}
        format.csv do
          headers['Content-Disposition'] = 'attachment; filename=Salesforce_contacts.csv'
          headers['Content-Type'] ||= 'text/csv'
        end
      end
    end

    def destroy
      DestroyContactService.new(params[:id]).execute

      flash[:notice] = I18n.t('admin.contacts.deleted_successfully')
      redirect_to admin_contacts_path
    end

    def dashboard
      @active_agents = User.where('end_of_clique >?', (Date.today).strftime('%m/%d/%Y'))
      @homebuyers = User.where(role: '0')
      @active_users = User.where('last_seen_at >?', 30.minutes.ago)
    end

    private

    def contacts
      params[:filter] = 'created' if filter.nil?
      contacts = contacts_by_filter_param

      return contacts.page(params[:page]).per(150) if subfilter.nil?

      subfiltered_contacts = contacts.select { |c| c.role.to_s == subfilter }
      paginate_array(subfiltered_contacts)
    end

    def contacts_by_filter_param
      contacts = params[:search].blank? ? Contact.kept : Contact.by_search(params[:search])

      case params[:filter]
      when 'created'
        contacts.where(status: 'created').includes(:contactable)
      when 'all'
        contacts.includes(:contactable)
      when 'others'
        contacts.where('status != 0').includes(:contactable)
      when nil
        contacts
      end
    end

    def sf_contacts
      sf_contacts = sf_contacts_by_filter_param
      
      return sf_contacts.page(params[:page]).per(150) if subfilter.nil?
      
      subfiltered_sfcontacts = sf_contacts.select { |c| c.status.to_s == subfilter }
      puts subfiltered_sfcontacts.count
      
      paginate_array(subfiltered_sfcontacts)
    end

    def sf_contacts_by_filter_param
      params[:filter] = 'with_email' if filter.nil?
      case params[:filter]
      when 'from_kixie'
        case params[:subfilter]
          when 'New'
            SalesForceContact.where(provider: 'Lead From Kixie', status: 'New')
          when 'Prospect'
            SalesForceContact.where(provider: 'Lead From Kixie', status: 'Prospect')
          when 'Potential'
            SalesForceContact.where(provider: 'Lead From Kixie', status: 'Potential')
          when 'Working'
            SalesForceContact.where(provider: 'Lead From Kixie', status: 'Working')
          when 'Contacted'
            SalesForceContact.where(provider: 'Lead From Kixie', status: 'Contacted')    
        else
          SalesForceContact.where(provider: 'Lead From Kixie')
        end
      when 'from_cher'
        case params[:subfilter]
          when 'New'
            SalesForceContact.where(provider: 'Lead From Cher', status: 'New')
          when 'Prospect'
            SalesForceContact.where(provider: 'Lead From Cher', status: 'Prospect')
          when 'Potential'
            SalesForceContact.where(provider: 'Lead From Cher', status: 'Potential')
          when 'Working'
            SalesForceContact.where(provider: 'Lead From Cher', status: 'Working')
          when 'Contacted'
            SalesForceContact.where(provider: 'Lead From Cher', status: 'Contacted')    
        else
         SalesForceContact.where(provider: 'Lead From Cher') 
        end
      when 'with_email'
        case params[:subfilter]
          when 'New'
            SalesForceContact.where.not(email: nil, status: 'New')
          when 'Prospect'
            SalesForceContact.where.not(email: nil, status: 'Prospect')
          when 'Potential'
            SalesForceContact.where.not(email: nil, status: 'Potential')
          when 'Working'
            SalesForceContact.where.not(email: nil, status: 'Working')
          when 'Contacted'
            SalesForceContact.where.not(email: nil, status: 'Contacted')      
        else
          SalesForceContact.where.not(email: nil)
        end
      when 'others'
        case params[:subfilter]
          when 'New'
            SalesForceContact.where("provider != 'Lead From Kixie' and status = 'New'")
          when 'Prospect'
            SalesForceContact.where("provider != 'Lead From Kixie' and status = 'Prospect'")
          when 'Potential'
            SalesForceContact.where("provider != 'Lead From Kixie' and status = 'Potential'")
          when 'Working'
            SalesForceContact.where("provider != 'Lead From Kixie' and status = 'Working'")
          when 'Contacted'
            SalesForceContact.where("provider != 'Lead From Kixie' and status = 'Contacted'")      
        else
        SalesForceContact.where("provider != 'Lead From Kixie'")
        end
      end
    end

    def filter
      params[:filter]
    end

    def paginate_array(contacts)
      Kaminari.paginate_array(contacts)
              .page(params[:page])
              .per(150)
    end

    def paginate_array(sf_contacts)
      Kaminari.paginate_array(sf_contacts)
              .page(params[:page])
              .per(150)
    end

    def subfilter
      params[:subfilter]
    end

    def uploaded_file_is_valid?
      @contacts_file = params[:contact][:file]
      return true if @contacts_file

      flash[:alert] = t('flashes.contacts.create_csv.alert')
      redirect_to admin_contacts_path
    end
  end
end
