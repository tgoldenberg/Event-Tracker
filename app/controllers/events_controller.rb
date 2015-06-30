class EventsController < ApplicationController
  def add
    @user = User.find(params[:user_id])
    @user.events << Event.create(event_params)
    render json: @user.events.to_json
  end

  private

  def event_params
    params.require(:event).permit(:title, :category, :url, :latitude, :longitude, :location, :start_time, :end_time)
  end
end
