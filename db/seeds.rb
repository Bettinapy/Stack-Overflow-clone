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
user4 = User.create!({"display_name":"Yuan", "email":"test4@gmail.com", "password":"password123"})

q1 = Question.create!({"title":"What are cookies? Why we use cookies?", "body":"I'm confused aboutt he usage of cookies, does anyone have any idea?", "author_id":user1.id})
q2 = Question.create!({"title":"What is session cookie? Any idea?", "body":"I'm confused aboutt he usage of session cookies, does anyone have any idea?", "author_id":user2.id})
q3 = Question.create!({"title":"What is cross site request forgery?", "body":"I'm confused aboutt he usage of CSRF, does anyone have any idea?", "author_id":user3.id})
q4 = Question.create!({"title":"How to solve binary search question?", "body":"I'm confused about solving binary search, does anyone have any idea?", "author_id":user1.id})
q5 = Question.create!({"title":"What is session cookie? Any idea?", "body":"I'm confused aboutt he usage of session cookies, does anyone have any idea?", "author_id":user2.id})
q6 = Question.create!({"title":"What is cross site request forgery?", "body":"I'm confused aboutt he usage of CSRF, does anyone have any idea?", "author_id":user3.id})
q7 = Question.create!({"title":"What is the difference between instance and class method?", "body":"What is the difference between instance and class method?", "author_id":user3.id})
q8 = Question.create!({"title":"move all new files from staging to working area in a one-liner", "body":"Is there an elegant command to reset HEAD all new files only from the staging area (to be committed list) back to the working area?", "author_id":user2.id})
q9 = Question.create!({"title":"What is API, data structure and ADT?", "body":"What is API, data structure and ADT? What are the differences between them?", "author_id":user2.id})
q10 = Question.create!({"title":"Differences Between Inheriting from a Class and a Module", "body":"Differences Between Inheriting from a Class and a Module", "author_id":user2.id})
q11 = Question.create!({"title":"What is Big O analysis and why do we need Big O?", "body":"What is Big O analysis and why do we need Big O?", "author_id":user4.id})
q12 = Question.create!({"title":"What are the differences between public and private method?", "body":"What are the differences between public and private method?", "author_id":user4.id})
q13 = Question.create!({"title":"3 primary motivations for having automated test suites", "body":"3 primary motivations for having automated test suites", "author_id":user4.id})
q14 = Question.create!({"title":"What are the differences between Unit Tests and Integration Tests?", "body":"What are the differences between Unit Tests and Integration Tests?", "author_id":user4.id})
q15 = Question.create!({"title":"What is relational database? What's the use case of primary key and foreign key?", "body":"What is relational database? What's the use case of primary key and foreign key?", "author_id":user1.id})
q16 = Question.create!({"title":"What is an ActiveRecord Relation? Can you explain it using some use cases?", "body":"What is an ActiveRecord Relation? Can you explain it using some use cases?", "author_id":user1.id})
q17 = Question.create!({"title":"When do we use left join / right join in SQL?", "body":"When do we use left join / right join in SQL?", "author_id":user1.id})
q18 = Question.create!({"title":"How to seed a database using the Rails command?", "body":"How to seed a database using the Rails command?", "author_id":user1.id})
q19 = Question.create!({"title":"Running rake db:seed isn't loading from seeds.rb", "body":"I'm trying to seed a set of football teams and football positions, and rails is strangely simply not doing it.", "author_id":user1.id})
q20 = Question.create!({"title":"What is the best way to seed a database in Rails?", "body":"I have a rake task that populates some initial data in my rails app. For example, countries, states, mobile carriers, etc.", "author_id":user4.id})
q21 = Question.create!({"title":"What is the use case of MongoDB? What is non-relational database?", "body":"What is the use case of MongoDB? What is non-relational database?.", "author_id":user4.id})