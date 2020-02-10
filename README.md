<h1 align="center">
  <br>
  <a href="https://trallo-fsp.herokuapp.com"><img src="https://raw.githubusercontent.com/alfredosumosav/trallo/master/app/assets/images/trello-mark-blue.png" alt="Trallo" width="200"></a>
  <br>
  Trallo
  <br>
</h1>

<h4 align="center">A Single-page App inspired by Trello, where users can create and favorite boards, create and share cards and add description and comments</h4>

<p align="center">
  <a href="#technologies">Technologies</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#future-features">Future Features</a>
</p>

<p align="center">
  <a href="https://trallo-fsp.herokuapp.com" target="_blank">Check it out <b>Live!</b></a>
</p>

---

## Technologies

- Ruby on Rails
- PostgreSQL
- React
- Redux
- JavaScript
- Webpack
- AWS S3

---

## Key Features

### Boards Dashboard

<div align="center">
    <img width=80% src="https://trello-attachments.s3.amazonaws.com/5b9270821913198b25dc6c3f/5e3a0311c186046f719be6fb/af84f7893e1c9f4ebbec099c660c6789/DASHBOARD_TRALLO.png">
</div>

### Boards & Cards

<div align="center">
    <img width=80% src="https://trallo-dev.s3-us-west-1.amazonaws.com/gif3.gif">
</div>

Engineered a seamless modal like transition between a board and a card by leveraging React Router props and React's _"diffing"_ algorithm to only render the card component when the board component is present or render both if you are accessing the card url directly resulting in improved user experience & navigation and predictable behavior & integrity.

```javascript
class CardShowEdit extends React.Component {
  componentDidMount() {
    this.props.requestCard(this.props.match.params.cardId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.removeCard(this.props.card.id);
      this.props
        .requestCard(this.props.match.params.cardId)
        .then(() => this.forceUpdate());
    }
  }

  render() {
    if (this.props.card === undefined) {
      return null;
    }

    return (
      <div>
        <BoardShowContainer />
        <CardShow
          card={this.props.card}
          updateCard={this.props.updateCard}
          deleteCard={this.props.deleteCard}
          createComment={this.props.createComment}
        />
      </div>
    );
  }
}
```

image

### AWS S3 Image Upload

<div align="center">
    <img width=80% src="https://trallo-dev.s3-us-west-1.amazonaws.com/gif1.gif">
</div>

Users can personalize their boards by attaching a background photo to a board. Leveraging Rails Active Storage and setting up a bucket in S3 it was possible to include the photo file in the form data sent to the server.

In the model:

```ruby
  has_one_attached :photo
```

And in the component:

```ruby
  handleFile(e) {
    this.setState({
        photoFile: e.currentTarget.files[0]
    })
  }
```

```ruby
handleSubmit(e) {
  e.preventDefault();
  let formData = new FormData();
  formData.append('board[id]', this.state.id);
  formData.append('board[title]', this.state.title);
  formData.append('board[photo]', this.state.photoFile);
  formData.append('board[favorited]', this.state.favorited);
  formData.append('board[archived]', this.state.archived);
  this.props.updateBoard(formData);
}
```

### New account creation, login, and guest/demo login

Users can sign up, sign in and log out. Users can use a demo login to try the site and must be logged in to use the app features.

### Lists

Boards are made up of lists which contain cards.

Users can create, update or delete lists within a board and create, update or delete cards(tasks) within lists.

### Comments

Members of a board can add comments to cards and Comment authors can edit or delete their comments.

### Sharing Boards

Users can share their board with other users through a url.

---

## How to use

<details><summary><b>Show Instructions</b></summary>

1. Install the ruby gems:

   ```sh
   $ bundle install
   ```

2. Install dependencies (you must have [Node.js](https://nodejs.org/en/download/package-manager) installed):

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

## Future Features

- Adding Due Dates To Cards
- Moving Cards through Lists
- Adding New Members
