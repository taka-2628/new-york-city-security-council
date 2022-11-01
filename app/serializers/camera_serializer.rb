class CameraSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :geometry, :address, :intersection, :zipcode, :borough, :description, :owner

  belongs_to :neighborhood
  belongs_to :user
  has_many :comments
end
