import React from "react";
import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import BoardShowContainer from "./boards/board_show_container";
import CardShowContainer from "./cards/card_show_container";
import Modal from "./modal/modal";
import NavBarContainer from "./nav_bar_container";
import SplashContainer from "./splash_container";
import BoardIndexContainer from "./boards/board_index_container";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { AuthRoute, AuthRoute2, ProtectedRoute } from "../utils/route_utils";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <header id="header">
          <nav className="navbar">
            <div id="logo-container">
              <Link to="/">
                <i className="fab fa-trello"></i>
              </Link>
              <Link id="logo" to={"/"}>
                Trallo
              </Link>
            </div>
            <Route exact to="/" component={NavBarContainer} />
          </nav>
        </header>
        <Modal />
        <div className="content">
          <Switch>
            <AuthRoute path="/login" component={LoginFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/dashboard" component={BoardIndexContainer} />
            <ProtectedRoute
              exact
              path="/boards/:boardId"
              component={BoardShowContainer}
            />
            <ProtectedRoute
              exact
              path="/boards/:boardId/cards/:cardId"
              component={CardShowContainer}
            />
            <AuthRoute2 exact path="/" component={SplashContainer} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
