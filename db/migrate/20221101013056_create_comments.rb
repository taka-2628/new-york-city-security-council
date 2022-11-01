class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :camera_id
      t.string :body
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
