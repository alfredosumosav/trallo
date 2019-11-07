import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// TESTING
// import {
//     signup,
//     logout,
//     login
// } from './actions/session_actions';
// TESTING END

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [Object.values(currentUser)[0].id]: Object.values(currentUser)[0] }
            },
            session: { id: Object.values(currentUser)[0].id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // TESTING
    // window.user = {
    //     username: "alfredo",
    //     password: "alfredo"
    // };
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.login = login;
    // window.logout = logout;
    // TESTING END

    ReactDOM.render(<Root store={store} />, root);
})