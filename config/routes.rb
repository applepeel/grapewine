Wine::Application.routes.draw do
  root to: "welcome#show"
  get 'about_us' => 'welcome#about_us', as: :about_us
  get 'products' => 'welcome#products', as: :products
end
