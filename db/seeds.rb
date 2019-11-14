# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

# Cleans the db
User.destroy_all
Board.destroy_all

#create a user
user = User.create!(username: 'demoUser', email: 'test@aa.io', password: 'password')
u1 = User.create!(username: "User 1", email: "u1@aa.io", password: "password")
u2 = User.create!(username: "User 2", email: "u2@aa.io", password: "password")

#creates a file from url
file = open('https://trallo-dev.s3-us-west-1.amazonaws.com/board.jpg')

#creates boards
board1 = user.boards.create!(title: 'board 1')
board1.photo.attach(io: file, filename: 'bg.jpg')
# board.save
board2 = user.boards.create(title: 'board 2')
board3 = user.boards.create(title: 'board 3')
board3.photo.attach(io: file, filename: 'bg.jpg')