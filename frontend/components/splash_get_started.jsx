import React from 'react';
import { Link } from 'react-router-dom';

const SplashGetStarted = (props) => {
    return (
        <div className="get-started-container">
            <div id="gs1" className="splash-column">
                <h3>Start Planning Today</h3>
                <p>Sign up and become one of the millions of people around the world using Trallo to get more done.</p>
                <p><Link className="btn btn-success" to="/signup">Get&nbsp;Started&nbsp;-&nbsp;It's&nbsp;Free!</Link></p>
            </div>
        </div>
    );
}

export default SplashGetStarted;