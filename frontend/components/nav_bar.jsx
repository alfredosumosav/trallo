import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout, login }) => {
    const demoUser = {
        username: 'test-user',
        password: 'password'
    };
    const display = currentUser ? (
        <div id="welcome">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <div className="btn-container"><button className="header-button btn btn-logout" onClick={logout}>Log Out</button></div>
        </div>
    ) : (
            <div id="session-actions-container">
                <button className="btn-success" onClick={() => login(demoUser)}>Demo</button>
                <Link id="login" className="btn" to="/login">Login</Link>
                <Link id="signup" className="btn" to="/signup">Sign&nbsp;up!</Link>
            </div>
        );


    return (
        <div className="navbar-content">
            {display}
        </div>
    );
};

export default NavBar;