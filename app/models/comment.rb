class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :camera

  validates :user_id, presence: true
  validates :camera_id, presence: true
  validates :body, presence: true, length: { in: 1..250 }
end
