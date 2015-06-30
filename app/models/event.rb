class Event < ActiveRecord::Base
  validates_uniqueness_of :url
  belongs_to :event_user
end
