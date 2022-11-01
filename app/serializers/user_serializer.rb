class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :fullname, :phone, :address_1, :address_2, :city, :state, :zipcode, :date_of_birth, :gender, :occupation, :citizenship

  belongs_to :neighborhood
  has_many :cameras
  has_many :comments
  has_many :social_media_platforms
end
