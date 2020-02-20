Rails.application.routes.draw do
  root "pages#index"
  get 'episodes', to: 'pages#episodes'

  get 'welcome/index'
  get 'articles', to: 'welcome#articles'
  post 'create_article', to: 'welcome#create_article'
end
