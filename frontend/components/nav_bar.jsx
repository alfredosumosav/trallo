import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser, logout }) => {
    const display = currentUser ? (
        <div>
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <div className="btn"><button className="header-button btn" onClick={logout}>Log Out</button></div>
        </div>
    ) : (
            <div>
                <Link id="login" className="btn" to="/login">Login</Link>
                <Link id="signup" className="btn" to="/signup">Sign up!</Link>
            </div>
        );

    return (
        <div className="navbar-content">
            {display}
        </div>
    );
};

export default NavBar;