Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resources :questions, only: [:index, :create, :update, :show, :destroy] do
      resources :answers, only: [:index, :create, :show, :update, :destroy]
    end
    resource :session, only: [:create, :destroy]
  end
end