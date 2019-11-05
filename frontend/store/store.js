import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

/*
Export a `configureStore` function that takes in a `preloadedState` parameter
and returns a store created with the `RootReducer`, `preloadedState`, and
`thunk` middleware.
*/

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
};

export default configureStore;