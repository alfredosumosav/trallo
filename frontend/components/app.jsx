import React from 'react';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <header>
                    <nav>
                    <Link id="logo" to={"/"}>Trallo</Link>
                    <Switch>
                    <Route path="/login" component={LoginFormContainer} />
                    <Route path="/signup" component={SignupFormContainer} />
                    <Route exact to="/" component={GreetingContainer} />
                    </Switch>
                    </nav>
                </header>

            </div>
        );
    }
}

export default App;