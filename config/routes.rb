Rails.application.routes.draw do
  get 'sessions/login'

  get 'sessions/create'

  get 'sessions/logout'

  get 'users/new'

  get 'users/create'

  root 'pages#home'
end
