# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_11_01_013122) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cameras", force: :cascade do |t|
    t.integer "user_id"
    t.integer "neighborhood_id"
    t.string "image_url"
    t.float "latitude"
    t.float "longitude"
    t.string "address"
    t.string "intersection"
    t.string "zipcode"
    t.string "borough"
    t.string "camera_type"
    t.string "owner"
    t.text "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "user_id"
    t.integer "camera_id"
    t.string "body"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "neighborhoods", force: :cascade do |t|
    t.string "borough"
    t.string "neighborhood"
  end

  create_table "social_media_platforms", force: :cascade do |t|
    t.string "social_media"
  end

  create_table "user_social_media_platforms", force: :cascade do |t|
    t.integer "user_id"
    t.integer "social_media_platform_id"
  end

  create_table "users", force: :cascade do |t|
    t.integer "neighborhood_id"
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "fullname"
    t.string "phone"
    t.string "address_1"
    t.string "address_2"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.date "date_of_birth"
    t.string "gender"
    t.string "occupation"
    t.string "citizenship"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
