class CreateCameras < ActiveRecord::Migration[7.0]
  def change
    create_table :cameras do |t|
      t.integer :user_id
      t.integer :neighborhood_id
      t.string :image_url
      t.string :geometry
      t.string :address
      t.string :intersection
      t.string :zipcode
      t.string :borough
      t.string :type
      t.string :owner
      t.text :description
      t.datetime :created_at
      t.datetime :updated_at
    end
  end
end
