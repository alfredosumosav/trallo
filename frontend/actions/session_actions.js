import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveCurrentUser = user => {
    return ({
        type: RECEIVE_CURRENT_USER,
        user
    })
}

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
});

const receiveErrors = errors => {
    return ({
        type: RECEIVE_ERRORS,
        errors
    });
}

const receiveSessionErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors
})

export const removeErrors = () => ({
    type: REMOVE_ERRORS
});

export const signup = user => dispatch => SessionAPIUtil.signup(user)
    .then(createdUser => dispatch(receiveCurrentUser(createdUser)))
    .fail(errors => dispatch(receiveSessionErrors(errors)));

export const login = user => dispatch => SessionAPIUtil.login(user)
    .then(loggedUser => dispatch(receiveCurrentUser(loggedUser)))
    .fail(errors => dispatch(receiveSessionErrors(errors)));

export const logout = () => dispatch => SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
    .fail(errors => dispatch(receiveSessionErrors(errors)));