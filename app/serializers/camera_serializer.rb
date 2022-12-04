class CameraSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :latitude, :longitude, :address, :intersection, :zipcode, :borough, :camera_type, :owner, :description, :created_at

  belongs_to :neighborhood
  belongs_to :user
  has_many :comments
end
