class User < ActiveRecord::Base
  has_secure_password
  validates_presence_of :username, :password

  has_many :event_users
  has_many :events, through: :event_users
end
