Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :boards, except: [:new, :edit]
    resources :lists, except: [:new, :edit]
    resources :cards, except: [:new, :edit]
    resources :comments, except: [:new, :edit]
  end
end