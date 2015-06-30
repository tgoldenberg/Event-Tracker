class Event < ActiveRecord::Base
  validates_uniqueness_of :title
  belongs_to :event_user
end
