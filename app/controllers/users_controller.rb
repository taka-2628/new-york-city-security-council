class UsersController < ApplicationController

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user, status: :ok, include: ['social_media_platforms']
    else
      render json: { error: "Not authorize" }, status: :unauthorized
    end
  end

  def create
    user = User.create(user_params)
    social_media_platforms = params[:social_media_platforms]
    if social_media_platforms
      social_media_platforms.each do |platform|
        user.user_social_media_platforms.create(social_media_platform_id: platform[:id])
      end
    end
    if user.valid?
      session[:user_id] = user[:id]
      render json: user, status: :created
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:neighborhood_id, :username, :password, :password_confirmation, :email, :fullname, :phone, :address_1, :address_2, :city, :state, :zipcode, :date_of_birth, :gender, :occupation, :citizenship)
  end

end
