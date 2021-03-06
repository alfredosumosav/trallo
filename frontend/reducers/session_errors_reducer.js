import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SESSION_ERRORS,
  REMOVE_ERRORS
} from "../actions/session_actions";

const _nullErrors = [];

const sessionErrorsReducer = (oldState = _nullErrors, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors.responseJSON;
    case RECEIVE_CURRENT_USER:
      return _nullErrors;
    case REMOVE_ERRORS:
      return [];
    default:
      return oldState;
  }
};

export default sessionErrorsReducer;
