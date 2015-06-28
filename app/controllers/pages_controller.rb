class PagesController < ApplicationController
  include ApplicationHelper
  def home
    @user = User.new
    if user_signed_in?
      @data = current_user.to_json
    end
  end
end
