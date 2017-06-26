Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get 'login', to: 'devise/sessions#new'
    get 'logout', to: 'devise/sessions#destroy'
  end

  root 'home#index'
  get 'about' => 'home#about'
  get 'products' => 'home#product'
  get 'hot_deals' => 'home#hot_deal'
  get 'contact_us' => 'home#contact'
  post 'send_email' => 'home#send_email'
  post 'send_query' => 'home#send_query'
  get 'search' => 'home#search'

  resources :tool_categories do
  end

  resources :variants do
    get :featured
    get :hot_deals
    get :send_promotion
  end

  resources :photos do
  end
  
  resources :contacts do
    post :import_contacts, on: :collection
  end
  
end
