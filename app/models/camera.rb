class Camera < ApplicationRecord
  belongs_to :neighborhood
  belongs_to :user

  has_many :comments
end
