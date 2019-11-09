import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
        requestBoards,
        requestBoard,
        createBoard,
        updateBoard,
        deleteBoard
    } from './actions/board_actions';
// TESTING
// import {
//     signup,
//     logout,
//     login
// } from './actions/session_actions';
// TESTING END

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    window.fetch = fetch;
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

    window.dispatch = store.dispatch;
    window.getState = store.dispatch;
    window.requestBoards = requestBoards;

    // now we can test our code from the console
    // dispatch(fetchBenches()).then(console.log);
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