class SessionsController < ApplicationController
  def login
    user = User.find_by(username: user_params[:username])
    if user && user.password == params[:password]
      session[:user_id] = user.id
      redirect_to root_path, notice: "Successfully logged in."
    else
      redirect_to :back, notice: "Failed to log in."
    end
  end

  def logout
    session[:user_id] = nil
    redirect_to root_path, notice: "Successfully logged out."
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
