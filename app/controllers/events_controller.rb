class EventsController < ApplicationController
  def add
    @user = User.find(params[:user_id])
    @event =  Event.find_by(title: event_params[:title])
    if @event
      EventUser.create(event_id: @event.id, user_id: @user.id)
    else
      @user.events << Event.create(event_params)
    end
    render json: @user.events.to_json
  end

  def remove
    @user = User.find(params[:user_id])
    @event = @user.events.find_by(title: params[:event][:title])
    @event_user = EventUser.find_by(user_id: @user.id, event_id: @event.id)
    @event_user.destroy
    render json: @user.events.to_json
  end

  private

  def event_params
    params.require(:event).permit(:title, :category, :url, :latitude, :longitude, :location, :start_time, :end_time)
  end
end
