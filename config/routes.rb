Rails.application.routes.draw do

  scope "(:locale)", locale: /#{I18n.available_locales.join("|")}/ do
    root to: 'contacts#index'

    resources :contacts
    resources :cities
  end

end
