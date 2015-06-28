Rails.application.routes.draw do
  post 'sessions/login' => 'sessions#login', as: 'login'

  delete 'sessions/logout' => 'sessions#logout', as: 'logout'

  get 'users/new' => 'users#new', as: 'signup'

  get 'sessions/which_user' => 'sessions#which_user'

  resources :users

  post 'users/' => 'users#create', as: 'create_user_registration'

  root 'pages#home'
end
