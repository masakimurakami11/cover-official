Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'views#index'

  resources :views, only: [:index] do
    collection do
      get 'news_1'
      get 'news_2'
      get 'about'
      get 'product_1'
      get 'product_2'
      get 'product_3'
      get 'question'
    end
  end
end
