import {
    RECEIVE_BOARDS,
    RECEIVE_BOARD,
    REMOVE_BOARD
} from '../actions/board_actions';

const boardsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_BOARDS:
            return action.boards;
        case RECEIVE_BOARD:
            nextState[action.board.id] = action.board;
            return nextState;
        case REMOVE_BOARD:
            delete nextState[action.boardId];
            return nextState;
        default:
            return oldState;
    }
};

export default boardsReducer;