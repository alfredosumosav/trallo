import React from 'react';
import { Link } from 'react-router-dom';

const SplashGetStarted = (props) => {
    return (
        <div className="splash-container get-started-container">
            <div id="gs1" className="splash-column">
                <h3>Start Planning Today</h3>
                <p>Sign up and become one of the millions of people around the world using Trello to get more done.</p>
                <p><Link className="btn btn-success" to="/signup">Get&nbsp;Started&nbsp;-&nbsp;It's&nbsp;Free!</Link></p>
            </div>
                {/* <div className="splash-column">
                    <div className="splash-row">
                        <h3>Work with any team</h3>
                        <p>Whether it’s for work, a side project or even the next family vacation, Trello helps your team stay organized.</p>
                        <p><Link className="btn btn-secondary" to="/signup">Start&nbsp;doing&nbsp;→</Link></p>
                    </div>
                </div> */}
        </div>
    );
}

export default SplashGetStarted;