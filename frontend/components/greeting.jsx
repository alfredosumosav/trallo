import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
    const sessionLinks = () => (
        <ul className="navbar-content">
            <Link className="btn" to="/login">Login</Link>
            &nbsp;or&nbsp;
      <Link className="btn" to="/signup">Sign up!</Link>
        </ul>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.username}!</h2>
            <div className="btn"><button className="header-button btn" onClick={logout}>Log Out</button></div>
        </hgroup>
    );
    return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;
