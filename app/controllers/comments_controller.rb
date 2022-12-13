class CommentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_response

  before_action :authorize

  def create
    comment = Comment.create!(comment_params)
    render json: comment, status: :created
  end

  def update
    comment = find_comment
    if session[:user_id] == comment.user.id
      comment.update!(comment_params)
      render json: comment, status: :accepted
    else
      render json: {errors: comment.errors.full_messages}, status: :unauthorized
    end
  end

  def destroy
    comment = find_comment
    if session[:user_id] == comment.user.id
      comment.destroy
      head :no_content, status: :deleted
    else
      render json: {errors: comment.errors.full_messages}, status: :unauthorized
    end
  end
  
  private

  def authorize
    return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
  end

  def find_comment
    Comment.find(params[:id])
  end

  def comment_params
    params.permit(:user_id, :camera_id, :body)
  end

  def render_not_found_response
    render json: { error: "Comment not found" }, status: :not_found
  end

  def render_invalid_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
