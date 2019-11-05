import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
    signup,
    logout,
    login
} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preloadedState = undefined;
    const store = configureStore(preloadedState);

    // TESTING
    window.user = {
        username: "alfredo",
        password: "alfredo"
    };
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.logout = logout;
    // TESTING END

    // if (window.currentUser) {
    //     preloadedState = {
    //         session: {
    //             currentUser: window.currentUser
    //         }
    //     };
    // }
    ReactDOM.render(<Root store={store} />, root);
})