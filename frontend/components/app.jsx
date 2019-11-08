import React from 'react';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import NavBarContainer from './nav_bar_container';
import SplashContainer from './splash_container';
import { Link, Route, Switch } from 'react-router-dom';
import {
    AuthRoute,
    ProtectedRoute
} from '../utils/route_utils';

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
                                <i className="fab fa-trello"></i>
                                <Link id="logo" to={"/"}>Trallo</Link>
                            </div>
                            <Route exact to="/" component={NavBarContainer} />
                        </nav>
                    </header>
                <Switch>
                    <AuthRoute path="/login" component={LoginFormContainer} />
                    <AuthRoute path="/signup" component={SignupFormContainer} />
                    <Route to="/" component={SplashContainer} />
                </Switch>
            </div>
        );
    }
}

export default App;