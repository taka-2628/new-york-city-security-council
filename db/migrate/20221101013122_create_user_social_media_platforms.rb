class CreateUserSocialMediaPlatforms < ActiveRecord::Migration[7.0]
  def change
    create_table :user_social_media_platforms do |t|
      t.integer :user_id
      t.integer :social_media_platform_id
    end
  end
end
