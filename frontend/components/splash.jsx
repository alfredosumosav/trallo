import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SplashWelcome from './splash_welcome';

class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="splash">
                <div className="splash-welcome-container">
                    <SplashWelcome />
                </div>
            </div>
        );
    }
}

export default Splash;