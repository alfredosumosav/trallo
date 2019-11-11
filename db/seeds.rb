# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Board.destroy_all
test = User.create!(username: "test-user", email: "test@aa.io", password: "password")
u1 = User.create!(username: "User 1", email: "u1@aa.io", password: "password")
u2 = User.create!(username: "User 2", email: "u2@aa.io", password: "password")
board1 = test.boards.create(title: 'board 1')
board2 = test.boards.create(title: 'board 2')
board3 = u1.boards.create(title: 'board 3')
board4 = u1.boards.create(title: 'board 4')
board5 = u2.boards.create(title: 'board 5')