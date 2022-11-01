class Neighborhood < ApplicationRecord
  has_many :users
  has_many :cameras
end
