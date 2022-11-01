class User < ApplicationRecord
  has_secure_password
  
  belongs_to :neighborhood
  
  has_many :cameras
  has_many :comments
  has_many :user_social_media_platforms

  has_many :social_media_platforms, through: :user_social_media_platforms

  validates :username, presence: true, uniqueness: true
  validates :password, presence: true, length: { in: 6..20 }
  validates :email, presence: true, uniqueness: true
end
