Rails.application.routes.draw do
  get '/signup', to: 'users#new'
  get 'static_pages/home'
  get 'static_pages/help'
  get 'static_pages/about'

  root 'pages#index'

  resources :todos

  get 'episodes', to: 'pages#episodes'

  get 'welcome/index'
  get 'articles', to: 'welcome#articles'
  post 'create_article', to: 'welcome#create_article'
end
