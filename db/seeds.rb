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
# u1 = User.create!(username: "User 1", email: "u1@aa.io", password: "password")
# u2 = User.create!(username: "User 2", email: "u2@aa.io", password: "password")

#creates a file from url
# file = open('https://trallo-dev.s3-us-west-1.amazonaws.com/board.jpg')
# file2 = open('https://trallo-dev.s3-us-west-1.amazonaws.com/stars.jpg')
# demo files
f1 = open('https://trallo-dev.s3-us-west-1.amazonaws.com/sf1.jpg')
f2 = open('https://trallo-dev.s3-us-west-1.amazonaws.com/ctg1.jpg')
f3 = open('https://trallo-dev.s3-us-west-1.amazonaws.com/ny.jpg')
f4 = open('https://trallo-dev.s3-us-west-1.amazonaws.com/sf2.jpg')
f5 = open('https://trallo-dev.s3-us-west-1.amazonaws.com/ctg2.jpg')
f6 = open('https://trallo-dev.s3-us-west-1.amazonaws.com/ctg3.jpg')
f7 = open('https://trallo-dev.s3-us-west-1.amazonaws.com/ctg4.jpg')

#creates boards
board1 = user.boards.create!(title: 'Moving to SF')
board1.photo.attach(io: f1, filename: 'bg1.jpg')

board2 = user.boards.create!(title: 'Before moving')
board2.photo.attach(io: f2, filename: 'bg2.jpg')

board3 = user.boards.create!(title: 'Plan trip')
board3.photo.attach(io: f3, filename: 'bg3.jpg')

board4 = user.boards.create!(title: 'Bay area tour')
board4.photo.attach(io: f4, filename: 'bg4.jpg')

board5 = user.boards.create!(title: 'Cartagena')
board5.photo.attach(io: f5, filename: 'b5.jpg')

board6 = user.boards.create!(title: 'Night plan 😎')
board6.photo.attach(io: f6, filename: 'bg6.jpg')

board7 = user.boards.create!(title: 'Cultural activities')
board7.photo.attach(io: f7, filename: 'bg7.jpg')

# create lists
list1 = board4.lists.create!(title: "Test 1", author_id: user.id)
list2 = board4.lists.create!(title: "Test 2", author_id: user.id)
list3 = board4.lists.create!(title: "Test 3", author_id: user.id)
list4 = board4.lists.create!(title: "Test 4", author_id: user.id)
list5 = board4.lists.create!(title: "Test 5", author_id: user.id)
list6 = board4.lists.create!(title: "Test 6", author_id: user.id)
list7 = board4.lists.create!(title: "Test 7", author_id: user.id)

# create cards
card1 = list1.cards.create!(title: "Card 1", author_id: user.id)
card2 = list1.cards.create!(title: "Card 2", author_id: user.id)
card3 = list1.cards.create!(title: "Card 3", author_id: user.id)
card4 = list2.cards.create!(title: "Card 4", author_id: user.id)
card5 = list2.cards.create!(title: "Card 5", author_id: user.id)
card6 = list2.cards.create!(title: "Card 6", author_id: user.id)
card7 = list2.cards.create!(title: "Card 7", author_id: user.id)
card8 = list3.cards.create!(title: "Card 8", author_id: user.id)
card9 = list3.cards.create!(title: "Card 9", author_id: user.id)
card10 = list3.cards.create!(title: "Card 10", author_id: user.id)
card11 = list3.cards.create!(title: "Card 11", author_id: user.id)

# create comments
comment1 = card11.comments.create!(body: "Comment 1", author_id: user.id)
comment2 = card11.comments.create!(body: "Comment 2", author_id: user.id)
comment3 = card11.comments.create!(body: "Comment 3", author_id: user.id)
comment4 = card11.comments.create!(body: "Comment 4", author_id: user.id)
comment5 = card11.comments.create!(body: "Comment 5", author_id: user.id)

# board.save
# board2 = user.boards.create(title: 'board 2')
# board3 = user.boards.create(title: 'board 3')
# board3.photo.attach(io: file2, filename: 'bg2.jpg')