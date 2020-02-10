<img src="https://raw.githubusercontent.com/alfredosumosav/trallo/master/app/assets/images/trello-mark-blue.png" align="left"
     title="Size Limit logo by Anton Lovchikov" width="10%">

# &nbsp;&nbsp;Trallo

<br>

#### A Single-page App inspired by Trello, where users can create and favorite boards, create and share cards and add description and comments

Check it out [**Live!**](https://trallo-fsp.herokuapp.com)

---

## Technologies & Languages

- Ruby / Rails
- React / Redux
- JavaScript
- jQuery
- Webpack
- Babel
- PostgreSQL
- AWS S3
- Heroku

---

## Creating a Board

<div align="center">
    <img width=80% src="https://media.giphy.com/media/S51qj0O338oJCgRQ4U/giphy.gif">
</div>

<br>

---

## How to Run It

<details><summary><b>Show Instructions</b></summary>

1. Install the ruby gems:

   ```sh
   $ bundle install
   ```

2. Install the node libraries (you must have [Node.js](https://nodejs.org/en/download/package-manager) installed):

   ```sh
   $ npm install
   ```

3. Create, configure and seed the database running:

    ```sh
    $ rails db:setup
    ```

    ```sh
    $ rails db:seed
    ```

4. Start the rails server:

   ```sh
   $ rails s
   ```

5. And in another terminal window run:

   ```sh
   $ npm start
   ```

Go to `http://localhost:3000` and you'll see the dashboard.

</details>

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

- Adding Due Dates
- Adding New Members
