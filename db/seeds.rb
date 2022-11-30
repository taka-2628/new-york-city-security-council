# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding neighborhoods..."
Neighborhood.create(
  [
    {
      borough: "Manhattan",
      neighborhood: "Chelsea and Clinton"
    },
    {
      borough: "Manhattan",
      neighborhood: "Lower East Side"
    },
    {
      borough: "Manhattan",
      neighborhood: "Lower Manhattan"
    },
    {
      borough: "Manhattan",
      neighborhood: "Gramercy Park and Murray Hill"
    },
    {
      borough: "Manhattan",
      neighborhood: "Greenwich Village and Soho"
    },
    {
      borough: "Manhattan",
      neighborhood: "Upper East Side"
    },
    {
      borough: "Manhattan",
      neighborhood: "Upper West Side"
    },
    {
      borough: "Manhattan",
      neighborhood: "Central Harlem"
    },
    {
      borough: "Manhattan",
      neighborhood: "East Harlem"
    },
    {
      borough: "Manhattan",
      neighborhood: "Inwood and Washington Heights"
    },
    {
      borough: "Manhattan",
      neighborhood: "West Side"
    },
    {
      borough: "Manhattan",
      neighborhood: "Tribeca"
    },
    {
      borough: "Staten Island",
      neighborhood: "Stapleton and St. George"
    },
    {
      borough: "Staten Island",
      neighborhood: "Port Richmond"
    },
    {
      borough: "Staten Island",
      neighborhood: "South Shore"
    },
    {
      borough: "Staten Island",
      neighborhood: "Mid-Island"
    },
    {
      borough: "Bronx",
      neighborhood: "High Bridge and Morrisania"
    },
    {
      borough: "Bronx",
      neighborhood: "Central Bronx"
    },
    {
      borough: "Bronx",
      neighborhood: "Hunts Point and Mott Haven"
    },
    {
      borough: "Bronx",
      neighborhood: "Bronx Park and Fordham"
    },
    {
      borough: "Bronx",
      neighborhood: "Southeast Bronx"
    },
    {
      borough: "Bronx",
      neighborhood: "Kingsbridge and Riverdale"
    },
    {
      borough: "Bronx",
      neighborhood: "Northeast Bronx"
    },
    {
      borough: "Queens",
      neighborhood: "Southeast Queens"
    },
    {
      borough: "Queens",
      neighborhood: "Northwest Queens"
    },
    {
      borough: "Queens",
      neighborhood: "Long Island City"
    },
    {
      borough: "Brooklyn",
      neighborhood: "Northwest Brooklyn"
    },
    {
      borough: "Brooklyn",
      neighborhood: "Flatbush"
    },
    {
      borough: "Brooklyn",
      neighborhood: "Borough Park"
    },
    {
      borough: "Brooklyn",
      neighborhood: "Bushwick and Williamsburg"
    },
    {
      borough: "Brooklyn",
      neighborhood: "East New York and New Lots"
    },
    {
      borough: "Brooklyn",
      neighborhood: "Southwest Brooklyn"
    },
    {
      borough: "Brooklyn",
      neighborhood: "Greenpoint"
    },
    {
      borough: "Brooklyn",
      neighborhood: "Central Brooklyn"
    },
    {
      borough: "Brooklyn",
      neighborhood: "Sunset Park"
    },
    {
      borough: "Brooklyn",
      neighborhood: "Southern Brooklyn"
    },
    {
      borough: "Brooklyn",
      neighborhood: "Canarsie and Flatlands"
    },
    {
      borough: "Queens",
      neighborhood: "North Queens"
    },
    {
      borough: "Queens",
      neighborhood: "Northeast Queens"
    },
    {
      borough: "Queens",
      neighborhood: "Central Queens"
    },
    {
      borough: "Queens",
      neighborhood: "West Queens"
    },
    {
      borough: "Queens",
      neighborhood: "West Central Queens"
    },
    {
      borough: "Queens",
      neighborhood: "Jamaica"
    },
    {
      borough: "Queens",
      neighborhood: "Southwest Queens"
    },
    {
      borough: "Queens",
      neighborhood: "Rockaways"
    }
  ]
)


puts "Seeding users..."
User.create([
  {
    neighborhood_id: 7,
    username: "test_jo",
    password: "jojojo",
    email: "test.jo@gmail.com",
    fullname: "Test Jo",
    phone: "0000000000",
    address_1: "123 New York Ave",
    address_2: "Apt 123",
    city: "New York",
    state: "NY",
    zipcode: "10000",
    date_of_birth: Date.current, 
    gender: "male",
    occupation: "VR/AR developer",
    citizenship: ""
  },
  {
    neighborhood_id: 7,
    username: "test_joyce",
    password: "joyce!",
    email: "test.joyce@gmail.com",
    fullname: "Test Joyce",
    phone: "0000000000",
    address_1: "123 New York Ave",
    address_2: "Apt 123",
    city: "New York",
    state: "NY",
    zipcode: "10000",
    date_of_birth: Date.current, 
    gender: "female",
    occupation: "UIUX designer",
    citizenship: ""
  },
  {
    neighborhood_id: 7,
    username: "test_takashi",
    password: "takataka",
    email: "test.takashi@gmail.com",
    fullname: "Test Takashi",
    phone: "0000000000",
    address_1: "123 New York Ave",
    address_2: "Apt 123",
    city: "New York",
    state: "NY",
    zipcode: "10000",
    date_of_birth: Date.current, 
    gender: "male",
    occupation: "Create Technologist",
    citizenship: ""
  }
])

puts "Seeding social media platforms..."
SocialMediaPlatform.create([
  {
    social_media: "Facebook"
  },
  {
    social_media: "Instagram"
  },
  {
    social_media: "Twitter"
  },
  {
    social_media: "TikTok"
  },
  {
    social_media: "Snapchat"
  },
  {
    social_media: "Pinterest"
  },
  {
    social_media: "LinkedIn"
  },
  {
    social_media: "BeReal"
  }
])


puts "Seeding user_social_media_platfrom..."
UserSocialMediaPlatform.create([
  {
    user_id: 1,
    social_media_platform_id: 1
  },
  {
    user_id: 1,
    social_media_platform_id: 2
  },
  {
    user_id: 1,
    social_media_platform_id: 3
  },
  {
    user_id: 1,
    social_media_platform_id: 4
  },
  {
    user_id: 2,
    social_media_platform_id: 1
  },
  {
    user_id: 2,
    social_media_platform_id: 2
  },
  {
    user_id: 2,
    social_media_platform_id: 4
  },
  {
    user_id: 2,
    social_media_platform_id: 7
  },
  {
    user_id: 2,
    social_media_platform_id: 8
  },
  {
    user_id: 3,
    social_media_platform_id: 1
  },
  {
    user_id: 3,
    social_media_platform_id: 2
  },
  {
    user_id: 3,
    social_media_platform_id: 3
  },
  {
    user_id: 3,
    social_media_platform_id: 7
  }
])


puts "Seeding cameras..."
Camera.create([
  {
    user_id: 3, #test_takashi
    neighborhood_id: 7, #upper west side
    image_url: "https://i.imgur.com/ODH0p2g.jpg",
    latitude: 40.815238,
    longitude: -73.960018,
    address: "",
    intersection: "",
    zipcode: "",
    borough: "",
    camera_type: "Dome",
    owner: "Other",
    description: "It's on a black pole on the sidewalk (north) right outside of the partment."
  },
  {
    user_id: 3, #test_takashi
    neighborhood_id: 7, #upper west side
    image_url: "https://i.imgur.com/rmxUeCc.jpg",
    latitude: 40.816886,
    longitude: 73.958769,
    address: "",
    intersection: "",
    zipcode: "",
    borough: "",
    camera_type: "Bullet",
    owner: "Other",
    description: "It's on a pole in a plaza in front of the Lenfest Center for the Arts."
  },
  {
    user_id: 3, #test_takashi
    neighborhood_id: 7, #upper west side
    image_url: "https://i.imgur.com/yw78Jsh.jpg",
    latitude: 40.817350,
    longitude: -73.958488,
    address: "",
    intersection: "",
    zipcode: "",
    borough: "",
    camera_type: "Bullet",
    owner: "Other",
    description: "It's on the north facing facade of the Lenfest Center for the Arts."
  },
  {
    user_id: 3, #test_takashi
    neighborhood_id: 7, #upper west side
    image_url: "https://i.imgur.com/SJKab3F.jpg",
    latitude: 40.817538,
    longitude: -73.958680,
    address: "",
    intersection: "",
    zipcode: "",
    borough: "",
    camera_type: "Dome",
    owner: "Other",
    description: "It's on a light pole on the sidewalk outside of the David Geffen Hall."
  },
])


puts "✅ Done seeding!"
