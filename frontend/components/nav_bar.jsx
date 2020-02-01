import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentUser, logout, openModal }) => {
  const display = currentUser ? (
    <div id="welcome">
      <h2 className="header-name">
        <div className="comment-content-container">
          <div className="comment-author nav-avatar">
            <div className="author-avatar">{currentUser.username[0]}</div>
          </div>
        </div>
      </h2>
      <div className="btn-container">
        <button className="header-button btn-logout" onClick={logout}>
          Log Out
        </button>
      </div>
      <div className="plus">
        <button className="btn" onClick={() => openModal("create_board")}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  ) : (
    <div id="session-actions-container">
      <Link id="login" className="btn" to="/login">
        Log&nbsp;In
      </Link>
      <Link id="signup" className="btn" to="/signup">
        Sign&nbsp;up
      </Link>
    </div>
  );

  return <div className="navbar-content">{display}</div>;
};

export default NavBar;
