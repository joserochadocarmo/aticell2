Aticell2::Application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  root :to => "dashboard#index"
  post "versions/:id/revert" => "versions#revert", :as => "revert_version"
end