# frozen_string_literal: true

class ProfileController < AuthenticationsController
  before_action :clean_budgets, only: :update
  before_action :set_client
  before_action :remove_duplicates, only: :update

  def edit
    @user_serialized = UsersSerializer.new(current_user, scope: current_user).as_json
  end

  # rubocop:disable Metrics/AbcSize
  def update
    respond_to do |format|
      if user_params[:city].present?
        unless valid_user_params?
          format.html { render 'edit', alert: t('flashes.profile.update.error') }
          return
        end
      end

      if current_user.update(user_params)
        format.html do
          notify_for_profile_completed if a_new_user?
          if phone_number_changed?
            start_verification(current_user.phone_number)
            redirect_to profile_verify_path, notice: 'OTP was successfully created.'
            return
          end

          if ssn_changed?
            redirect_to co_borrower_loans_loan_form_completed_path
            return
          end

          if user_loan_form?
            redirect_to co_borrower_loans_user_loan_success_path(user_params)
            # redirect_to url_for(action: 'user_loan_success', controller: '/co_borrower/loans', only_path: false, params: user_params)
            return
          end
          ProfessionalVerificationMailer.send_request(current_user.email).deliver_later unless current_user.number_license.blank?
          MixpanelTracker.update_user(current_user, user_params.to_h)
          redirect_to user_path, notice: t('flashes.profile.update.success')
        end
      else
        format.html { render 'edit', alert: t('flashes.profile.update.error') }
      end
      format.json { render json: UsersSerializer.new(current_user, scope: current_user).to_json }
    end
  rescue ArgumentError
    render 'edit', alert: t('flashes.profile.update.error')
  end
  # rubocop:enable Metrics/AbcSize

  def verify
    if request.post?
      verification_code = params['one']+params['two']+params['three']+params['four']+params['five']+params['six']
      is_verified = check_verification(current_user.phone_number, verification_code)
      if is_verified
        current_user.phone_verified = true
        current_user.save
        respond_to do |format|
          format.html { redirect_to user_path, notice: t('flashes.profile.update.success') }
        end
      else
        respond_to do |format|
          format.html { redirect_to profile_verify_path, notice: 'The OTP was invalid.' }
        end
      end
    else
    end
  rescue StandardError
    flash[:alert] = 'Invalid OTP.'
  end

  private

  def a_new_user?
    @a_new_user ||= current_user.saved_change_to_role?
  end

  def agent_attributes
    %i[accept_referral_agreement number_license professional_role]
  end

  def notify_for_profile_completed
    WelcomeUserNotifierService.new(current_user).execute
    current_user.update_contact
  end

  def user_params
    user_role = current_user.role || params[:user][:role]
    params.require(:user)
          .permit(:first_name, :last_name, :image_stored, :role,
                  :search_intent, :accept_privacy_policy, :email,
                  :accept_terms_and_conditions, :phone_number,
                  :accept_referral_agreement, :sell_my_info,
                  :description, :company_name, :status, :skip_onbording,
                  :address1, :address2, :city, :state, :zipcode, :ssn, :provider,
                  :number_license, :professional_role, :co_borrowers,
                  :date_of_birth, :gender, :property_type, :budget_from,
                  :budget_to, :high_edu_level, :graduated_in, :res_com, :com_addr_1, :com_addr_2, :com_zip, :com_city, :com_state, :employment_type, :postion, :emp_from, :emp_to, :org_addr_1, :org_addr_2, :org_zip, :org_city, :org_state, :past_employment_type, :past_postion, :past_emp_from, :past_org_addr_1, :past_org_addr_2, :past_org_zip, :past_org_city, :past_org_state, :base_income, :overtime_income, :bonuses, :commissions, :divident_interest_income, :net_rental_income, :other_income, :housing_expense, :rent_expense, :first_mortgage, :other_fin_expense, :hazard_insur_exp, :real_estate_tax_exp, :mort_ins_exp, :hoa, :child_care_exp, :union_due_exp, :other_exp, :bank_assets, :credit_uni_assets, :stock_value, :bonds_value, :lic, :real_estate_owned, :vested_int_assests, :retirement_fund, :networth_of_business, :other_liquid, :other_nonliquid, :alimony_liability, :child_support_liability,
                  specialties: [], areas: [])
          .reject do |attr, _value|
            user_role.to_sym != :agent && agent_attributes.include?(attr.to_sym)
          end
  end

  def user_path
    if current_user.agent?
      customer_dashboard_path
    elsif params.dig('user', 'role')
      co_borrower_root_path
    else
      co_borrower_dashboard_path
    end
  end

  def clean_budgets
    params[:user][:budget_from] = nil if params[:user][:budget_from].blank?
    params[:user][:budget_to] = nil if params[:user][:budget_to].blank?
  end

  def phone_number_changed?
    current_user.saved_change_to_phone_number?
  end

  def ssn_changed?
    current_user.saved_change_to_ssn? || current_user.saved_change_to_date_of_birth?
  end

  def user_loan_form?
    current_user.graduated_in_changed? || current_user.high_edu_level?
  end

  def set_client
    @client = Twilio::REST::Client.new(ENV['TWILIO_ACCOUNT_SID'], ENV['TWILIO_AUTH_TOKEN'])
  end

  def start_verification(to)
    verification = @client.verify.services(ENV['TWILIO_VERIFICATION_SID'])
                                 .verifications
                                 .create(:to => to, :channel => 'sms')
    return verification.sid
  end

  def check_verification(phone, code)
    verification_check = @client.verify.services(ENV['TWILIO_VERIFICATION_SID'])
                                       .verification_checks
                                       .create(:to => phone, :code => code)
    return verification_check.status == 'approved'
  end
    
  def remove_duplicates
    if params[:user][:city].present?
      city = reshape(params[:user][:city])
      if duplication_exists?(current_user.areas, city)
        duplicates = [] << city
        current_user.update(areas: (current_user.areas - duplicates))
      end
    else
      params[:user].extract!(:city)
    end
    
    if current_user.city?
      if params[:user].has_key?(:areas)
        city = reshape(current_user.city)
        if duplication_exists?(params[:user][:areas], city)
          duplicates = [] << city
          all_areas = params[:user].extract!(:areas)[:areas]
          params[:user] = params[:user].merge!({areas: (all_areas - duplicates)})
        end
      end
    end 
  end

  def duplication_exists?(areas, city)
    areas.map{|area| area.downcase}.include?(city.downcase)
  end

  def reshape(city)
    city.split(",").first
  end

  def valid_user_params?
    GooglePlaces.is_valid?(user_params[:city])
  end
end
