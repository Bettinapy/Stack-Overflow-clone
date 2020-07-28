# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

user1 = User.create!({"display_name":"test1", "email":"test1@gmail.com", "password":"randompswd1"})
user2 = User.create!({"display_name":"test2", "email":"test2@gmail.com", "password":"randompswd2"})
user3 = User.create!({"display_name":"test3", "email":"test3@gmail.com", "password":"randompswd3"})