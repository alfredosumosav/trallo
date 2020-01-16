# Trallo

### App inspired by the project management app [Trello](https://trello.com) based on the Kanban system which allows you to quickly and seamlessly become productive and tackle work at a personal / organizational level.

Check it out [**Live!**](https://trallo-fsp.herokuapp.com)

---

## Technologies & Languages
- Ruby / Rails
- Vanilla JavaScript
- jQuery
- React
- Redux
- Node.js
- Webpack
- Babel
- PostgreSQL
- AJAX
- AWS S3
- Heroku
- jBuilder
- Postman
- HTML5
- CSS3
- Sass

---

## Visualize Navigation Proccess

<div align="center">
    <img width=80% src="https://media.giphy.com/media/S51qj0O338oJCgRQ4U/giphy.gif">
</div>

<br>

---

## How to Run It
1. First you need to install all the ruby gems by running the following in the terminal:

```
bundle install
```

2. Now you need to install a few node libraries, so make sure you have installed [Node.js](https://nodejs.org/en/download/package-manager) before running the following:

```
npm install
```

3. Create, configure and seed the database running:

```
rails db:setup
rails db:seed
```

4. Run in the terminal:

```
rails s
```

5. In another terminal window run:

```
npm start
```

Now you will be able to go to `http://localhost:3000` and see the dashboard.

---

## Creating the state shape
By having a standardized state shape it was possible to take advantage of the redux store to provide essential pieces of information to specific react components. It definitely made the code DRY and allowed to have the necessary information at hand and reduce the amount of code to be written. Using the redux `combineReducers` allowed me to obtain my desired state shape:

```javascript
const entitiesReducer = combineReducers({
    users: usersReducer,
    boards: boardsReducer,
    lists: listsReducer
});
```

---

## Future Features
- Adding Comments and Due Dates
- Sharing boards
