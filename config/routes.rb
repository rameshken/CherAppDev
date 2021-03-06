# frozen_string_literal: true

require 'sidekiq/web'
Rails.application.routes.draw do
  
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks',
                                    sessions: 'users/sessions',
                                    registrations: 'users/registrations',
                                    confirmations: 'users/confirmations',
                                    passwords: 'users/passwords',
                                    invitations: 'users/invitations' }

  devise_scope :user do
    get '/select-subscription', to: 'users/registrations#select_subscription', as: :select_subscription
  end

  scope module: 'users' do
    resources :activations, except: %i[destroy update]
    resources :conversations, only: %i[index show new]
    resources :chat_groups, path: 'chat-groups',  only: %i[new show create edit update]
    resources :video_calls, path: 'video-calls', only: %i[show create destroy], param: :channel_sid
    resources :full_notifications, only: %i[create]
  end

  namespace :admin do
    resources :co_borrowers, path: 'co-borrowers', only: %i[index show destroy] do
      resources :loans, only: %i[index edit update destroy show]
    end
    resources :contacts, only: %i[create index destroy adm_dashboard]
    resources :houses, only: %i[index show edit update]
    resources :inquiries, only: %i[index edit update]
    resources :professionals, only: %i[index update]
    resource :prospect, only: %i[new create]
    resources :subscribers, only: %i[create index]
    resources :rentals, except: %i[create delete]
    resources :topics
    resources :users, only: %i[update]
    resources :mailchimp_sync, only: %i[index create]
    resources :mailchimp_archive, only: %i[new]
    root to: 'topics#index'
    mount Sidekiq::Web => '/sidekiq'
    get '/salesforce', to: 'contacts#sfindex'
    get '/dashboard', to: 'contacts#dashboard'

  end

  namespace :co_borrower, path: 'co-borrower' do
    resource :dashboard, only: %i[show]
    resources :houses, only: %i[new create]
    resources :inquiries, only: %i[new create show]
    resources :loans, only: %i[new create show]
    resources :rentals, only: %i[new create]
    resources :responses, only: %i[new create destroy]
    root to: 'onbording#show'
    get '/homebuyerspage', to: 'onbording#homebuyers_landing'
    get '/homebuyers_page', to: 'onbording#homebuyer_map'
    post '/homebuyerspage', to: 'onbording#homebuyers_landing'
  end

  namespace :customer do
    resource :dashboard, only: %i[show]
    resources :billing_info, only: %i[edit update destroy]
    resources :checkout, only: %i[index], path: 'pricing'
    resources :leads, only: %i[index]
    resources :payments, only: %i[create show]
    resources :professional_reviews, only: %i[create update]
    resources :coupons, only: %i[show]
    resources :message_credits, only: %i[new create]
  end

  resources :activities, only: %i[destroy show] do
    resources :comments, only: %i[create destroy edit update]
    resources :likes, only: %i[index create destroy]
  end

  resources :publications, except: %i[index] do
    resources :comments, only: %i[create destroy edit update]
    resources :likes, only: %i[index create destroy]
    resources :images, only: %i[show]
  end

  resources :message_channels, only: %i[show create update] do
    resources :participants, only: %i[index destroy], constraints: { id: %r{[^/]+} }
  end

  resource :identification, only: %i[new create]
  resource :post, only: %i[create]
  resource :prospect, only: %i[create]
  resources :bounce_events, only: %i[create]
  resources :calls, only: %i[new create]
  resources :contact_supports, only: %i[create]
  resources :chat_tokens, only: %i[create]
  resources :engaged_people, only: :index
  resources :flagged_properties, only: %i[index create destroy show]
  resources :friend_requests, only: %i[create update index]
  resources :friends, only: %i[index]
  resources :homebuyers, only: :index
  resources :matches, only: %i[index]
  resources :network_watched_properties, only: %i[index]
  resources :notifications, only: %i[update index destroy]
  resources :notification_settings, only: %i[update edit new]
  resources :loan_participants, only: %i[edit update], controller: 'loan_participants'
  resources :profile, only: %i[edit update destroy verify]
  resources :properties, only: %i[show index]
  resources :property_notifications, only: %i[update]
  resources :social_networks, only: %i[index messages]
  resources :users, only: %i[show index update], param: :id, constraints: { id: %r{[^/]+} }
  resources :text_messages, only: %i[create]
  resources :property_searches, only: %i[create destroy show]
  resources :user_images, only: %i[create destroy]
  resources :users_importer, only: %i[new create]
  resources :shapes, only: %i[create update destroy]
  resources :concierge_conversations, only: %i[create]

  get '/mailchimp_callback', to: 'mailchimp_callback#new'
  post '/mailchimp_callback', to: 'mailchimp_callback#new'
  get '/faq', to: 'faq#show'
  get '/knowledge-hub', to: 'knowledge_hub#show'
  get '/look-around', to: 'look_around#index', as: :look_around
  get '/search', to: 'multisearch#index', as: :search
  post '/invite', to: 'invitations#create'
  post '/professional_contact', to: 'professional_contacts#create'
  post '/stripe_events', to: 'stripe_events#create'
  post '/email', to: 'emails#create'
  get '/robots', to: 'robots#show'
  get '/sitemap', to: 'sitemap#show'
  get '/professionals', to: 'professionals_landing_page#agents'
  get '/agents', to: 'professionals_landing_page#show'
  get '/places-around', to: 'places_around#show'
  post '/simpler_registration', to: 'users/simpler_registrations#create'

  get '/:page', to: 'pages#show', as: :custom_page
  root to: 'landing_page#show'

  get '/profile/verify', to: 'profile#verify'
  post '/profile/verify', to: 'profile#verify'
  get '/co_borrower/loans/get_loan', to: 'co_borrower/loans#get_loan'
  get '/co_borrower/loans/loan_form_completed', to: 'co_borrower/loans#loan_form_completed'
  get '/co_borrower/loans/user_loan_form', to: 'co_borrower/loans#user_loan_form'
  get '/co_borrower/loans/user_loan_success', to: 'co_borrower/loans#user_loan_success'
  get '/co_borrower/loans/get_loan_completed', to: 'co_borrower/loans#get_loan_completed'
  get '/social_networks/messages', to: 'social_networks#messages'
  get '/social_networks/network', to: 'social_networks#network'
  get '/social_networks/homebuyers', to: 'social_networks#homebuyers'
  get '/social_networks/suggestedbuyers', to: 'social_networks#suggestedbuyers'
  get '/social_networks/agents', to: 'social_networks#agents'
  get '/social_networks/groups', to: 'social_networks#groups'

  get 'rooms/index', to: 'rooms#index'
  # get '/rooms/homebuyerspage', to: 'rooms#homebuyers_landing_page', as: :homebuyers_page
  # post '/rooms/homebuyerspage', to: 'rooms#homebuyers_landing_page'
  resources :rooms do
    resources :messages
  end
  
end
