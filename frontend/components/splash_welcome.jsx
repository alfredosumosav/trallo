import React from 'react';

const SplashWelcome = (props) => {
    return (
        <div className="splash-welcome">
            <div className="welcome-msg">
                <h1>Trallo lets you work more collaboratively and get more done.</h1>
                <p>Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.</p>
            </div>
            <div className="welcome-img">
                <img src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/308998dcb3ed5ab3d01217a4d24ffa03/hero-a.svg" alt="welcome-img"/>
            </div>
        </div>
    );
}

export default SplashWelcome;