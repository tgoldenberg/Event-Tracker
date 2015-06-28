class SessionsController < ApplicationController
  include ApplicationHelper
  def login
    user = User.find_by(username: user_params[:username])
    if user && user.password == params[:password]
      session[:user_id] = user.id
      redirect_to root_path
    else
      redirect_to :back, notice: "Failed to log in."
    end
  end

  def logout
    session[:user_id] = nil
    redirect_to root_path, notice: "Successfully logged out."
  end

  def which_user
    @data = {}
    if current_user
      @data = current_user.to_json
    end
    render json: @data
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
