import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';

// Comment this back in after you have built the login functionality

import { logout, login } from '../actions/session_actions';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    logout: () => dispatch(logout()),
});


// Comment this out when you have built the login functionality
// const mapStateToProps = null;
// const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
