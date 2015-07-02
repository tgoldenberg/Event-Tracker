class Event < ActiveRecord::Base
  validates_uniqueness_of :name
  belongs_to :event_user
end
