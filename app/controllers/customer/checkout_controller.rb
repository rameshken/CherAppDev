# frozen_string_literal: true

module Customer
  class CheckoutController < ApplicationController
    layout 'checkout/application'
    before_action :set_clique_plans, only: :index
    before_action :set_selected_plan, only: :index

    def index
      # if current_user&.part_of_clique?
      #   flash.now[:notice] = t('flashes.payment.already_has_plan', end_date: current_user.end_of_clique)
      #   render 'pages/pricing'
      # end
    end

    private
      def set_clique_plans
        premium_plan = Stripe::Plans::PREMIUM
        pro_plan = Stripe::Plans::PRO

        @plans = { 
          :premium => { 
            :amount => premium_plan.amount / 100,
            :duration => "#{premium_plan.interval_count} #{premium_plan.interval}"
          },
          :pro => { 
              :amount => pro_plan.amount / 100,
              :duration => "#{pro_plan.interval_count} #{pro_plan.interval}"
          }
        }
      end

      def set_selected_plan
        @plan = params[:plan] if params[:plan].present?
      end
  end
end
