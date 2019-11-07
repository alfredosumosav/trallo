import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SplashWelcome from './splash_welcome';
import SplashCollaborate from './splash-collaborate';

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
                <div className="splash-collaborate-container">
                    <SplashCollaborate />
                </div>
            </div>
        );
    }
}

export default Splash;