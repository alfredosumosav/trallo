import {
    RECEIVE_CURRENT_BOARD,
    RECEIVE_BOARD_ERRORS,
    REMOVE_ERRORS
} from "../actions/board_actions";

const _nullErrors = [];

const boardErrorsReducer = (oldState = _nullErrors, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_BOARD_ERRORS:
            return action.errors.responseJSON;
        case RECEIVE_CURRENT_BOARD:
            return _nullErrors;
        case REMOVE_ERRORS:
            return [];
        default:
            return oldState;
    }
};

export default boardErrorsReducer;