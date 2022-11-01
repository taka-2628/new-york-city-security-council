class CamerasController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  def index
    cameras = Camera.all
    render json: cameras, include: ['user', 'neighborhood', 'comments', 'comments.user']
  end

  def show
    camera = find_camera
    render json: camera, include: ['user', 'neighborhood', 'comments', 'comments.user']
  end

  def create
    camera = Camera.create!(camera_params)
    render json: camera, status: :created
  end

  def update
    camera = find_camera
    camera.update(camera_params)
    render json: camera, status: :accepted
  end

  def delete
    camera = find_camera
    camera.destroy
    head :no_content, status: :deleted
  end

  private 

  def find_camera
    Camera.find(params[:id])
  end

  def camera_params
    params.permit(:user_id, :neighborhood_id, :image_url, :geometry, :address, :intersection, :zipcode, :borough, :description, :owner)
  end

  def render_not_found_response
    render json: { error: "Camera not found" }, status: :not_found
  end

  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
