class SocialMediaPlatform < ApplicationRecord
  has_many :user_social_media_platforms

  has_many :users, through: :user_social_media_platforms
end
