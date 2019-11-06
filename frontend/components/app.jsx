import React from 'react';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import NavBarContainer from './nav_bar_container';
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
        // debugger
        return (
            <div class="main">
                <header>
                    <nav className="navbar">
                        <Link id="logo" to={"/"}>Trallo</Link>
                            <Route exact to="/" component={NavBarContainer} />
                            {/* <Route exact to="/" component={GreetingContainer} /> */}
                    </nav>
                            <AuthRoute path="/login" component={LoginFormContainer} />
                            <AuthRoute path="/signup" component={SignupFormContainer} />
                </header>

            </div>
        );
    }
}

export default App;