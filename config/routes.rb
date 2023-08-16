Rails.application.routes.draw do
  resources :hoges, only: [:new, :create]
end
