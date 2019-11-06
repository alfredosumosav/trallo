import {
    RECEIVE_CURRENT_USER,
    RECEIVE_SESSION_ERRORS
} from "../actions/session_actions";

const _nullErrors = [];

const sessionErrorsReducer = (oldState = _nullErrors, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors.responseJSON;
        case RECEIVE_CURRENT_USER:
            return _nullErrors;

        default:
            return oldState;
    }
};

export default sessionErrorsReducer;