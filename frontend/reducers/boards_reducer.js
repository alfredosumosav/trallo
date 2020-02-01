import {
  RECEIVE_BOARDS,
  RECEIVE_BOARD,
  REMOVE_BOARD,
  REMOVE_BOARDS
} from "../actions/board_actions";

const boardsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_BOARDS:
      return action.boards;
    case RECEIVE_BOARD:
      let board = Object.values(action.board)[0];
      nextState[board.id] = board;
      return nextState;
    case REMOVE_BOARD:
      delete nextState[action.boardId];
      return nextState;
    case REMOVE_BOARDS:
      return {};
    default:
      return oldState;
  }
};

export default boardsReducer;
