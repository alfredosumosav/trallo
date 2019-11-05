import React from 'react';
import GreetingContainer from './greeting_container';
import LoginFormContainer from './login_form_container';
import SignupFormContainer from './signup_form_container';
import { Link, Route } from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <header>
                    <h1><a href="/" >Trallo</a></h1>
                    <GreetingContainer />
                </header>

                <Route path="/login" component={LoginFormContainer} />
                <Route path="/signup" component={SignupFormContainer} />
            </div>
        );
    }
}

export default App;