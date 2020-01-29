import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import SplashWelcome from './splash_welcome';
import SplashCollaborate from './splash-collaborate';
import SplashFeatures from './splash_features';
import SplashGetStarted from './splash_get_started';
import Footer from './footer';

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
                <div className="splash-features-container">
                    <SplashFeatures />
                </div>
                <div id="get-started" className="splash-get-started-container">
                    <SplashGetStarted />
                </div>
                <div id="footer-container">
                        <Footer />
                </div>
            </div>
        );
    }
}

export default Splash;