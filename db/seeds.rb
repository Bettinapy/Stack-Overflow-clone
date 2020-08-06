# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all

demo_user = User.create!({"display_name":"demo", "email":"demo@lifooverflow.com", "password":"password123"})

user1 = User.create!({"display_name":"Sen", "email":"test1@gmail.com", "password":"password123"})
user2 = User.create!({"display_name":"Haku", "email":"test2@gmail.com", "password":"password123"})
user3 = User.create!({"display_name":"No-face", "email":"test3@gmail.com", "password":"password123"})

q1 = Question.create!({"title":"What are cookies? Why we use cookies?", "body":"I'm confused aboutt he usage of cookies, does anyone have any idea?", "author_id":user1.id})
q2 = Question.create!({"title":"What is session cookie? Any idea?", "body":"I'm confused aboutt he usage of session cookies, does anyone have any idea?", "author_id":user2.id})
q3 = Question.create!({"title":"What is cross site request forgery?", "body":"I'm confused aboutt he usage of CSRF, does anyone have any idea?", "author_id":user3.id})

