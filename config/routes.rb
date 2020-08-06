Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index]
    resources :questions, only: [:index, :create, :update, :show, :destroy] do
      member do
        post 'upvote', controller: 'votes', as: :upvote
        post 'downvote', controller: 'votes', as: :downvote
      end
      resources :answers, only: [:index, :create, :update, :destroy] do 
        member do
          post 'upvote', controller: 'votes', as: :upvote
          post 'downvote', controller: 'votes', as: :downvote
        end
      end
    end
    resources :answers, only: [:show]
    resource :session, only: [:create, :destroy]
  end
end
