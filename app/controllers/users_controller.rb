class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new user_params
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path, notice: "Successfully registered."
    else
      render :new, notice: "Failed to register."
    end
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    session[:user_id] = nil
    redirect_to root_path, notice: "Successfully deleted account."
  end

  private

  def user_params
    params.require(:user).permit(:username, :city, :state, :country, :password)
  end
end
