Rails.application.routes.draw do
  get 'static_pages/home'
  get 'static_pages/help'
  root "pages#index"

  resources :todos

  get 'episodes', to: 'pages#episodes'

  get 'welcome/index'
  get 'articles', to: 'welcome#articles'
  post 'create_article', to: 'welcome#create_article'
end
