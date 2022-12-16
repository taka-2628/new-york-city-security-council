# New York City Security Council
New York City Security Council is a full-stack web application that uses Rails API to support a React front-end application. 

## Background
New York City Security Council is an online platform where residents and communty members of New York City can report surveillance cameras and have conversations around security, privacy and use of the technology. 

## Features
- A user can sign up, log in and logout
- A user can upload cameras
- A user can see cameras uploaded by other users on an interactive map
- A user can leave, edit, and delete a comment 

## System Dependencies
- Ruby 2.7.4
- NodeJS (v18), and npm
- Rails 7
- React 18
- React Router Dom
- Mapbox GL
- React Map GL
- Postgresql

## Installation
1. Fork and clone this repository
2. Install dependencies
```
bundle install
```
```
npm install --prefix client
```
2. Create and seed the database
```
rails db:migrate db:seed
```
3. Run rails server
```
rails s
```
4. Run react server
```
npm start --prefix client
```

## License
[MIT](https://choosealicense.com/licenses/mit/)