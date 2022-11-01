class UserSocialMediaPlatform < ApplicationRecord
  belongs_to :user
  belongs_to :social_media_platform
end
