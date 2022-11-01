class User < ApplicationRecord
  has_secure_password
  
  belongs_to :neighborhood
  
  has_many :cameras
  has_many :comments
  has_many :user_social_media_platforms

  has_many :social_media_platforms, through: :user_social_media_platforms
end
