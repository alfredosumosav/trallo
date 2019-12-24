import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

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

    ReactDOM.render(<Root store={store} />, root);
})