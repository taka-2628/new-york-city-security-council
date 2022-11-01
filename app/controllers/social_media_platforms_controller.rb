class SocialMediaPlatformsController < ApplicationController

  def index
    social_media = SocialMediaPlatform.all
    render json: social_media
  end
  
end
