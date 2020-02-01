import * as BoardAPIUtil from "../utils/board_api_util";

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const RECEIVE_CURRENT_BOARD = "RECEIVE_CURRENT_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";
export const REMOVE_BOARD = "REMOVE_BOARD";
export const REMOVE_BOARDS = "REMOVE_BOARDS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

export const removeBoard = boardId => ({
  type: REMOVE_BOARD,
  boardId
});

const receiveBoardErrors = errors => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});

export const removeBoards = () => ({
  type: REMOVE_BOARDS
});

export const requestBoards = () => dispatch => {
  return BoardAPIUtil.fetchBoards()
    .then(boards => dispatch(receiveBoards(boards)))
    .fail(errors => dispatch(receiveBoardErrors(errors)));
};

export const requestBoard = boardId => dispatch => {
  return BoardAPIUtil.fetchBoard(boardId)
    .then(board => dispatch(receiveBoard(board)))
    .fail(errors => dispatch(receiveBoardErrors(errors)));
};

export const createBoard = board => dispatch => {
  return BoardAPIUtil.createBoard(board)
    .then(createdBoard => dispatch(receiveBoard(createdBoard)))
    .fail(errors => dispatch(receiveBoardErrors(errors)));
};

export const updateBoard = board => dispatch => {
  return BoardAPIUtil.updateBoard(board)
    .then(updatedBoard => dispatch(receiveBoard(updatedBoard)))
    .fail(errors => dispatch(receiveBoardErrors(errors)));
};

export const deleteBoard = boardId => dispatch => {
  return BoardAPIUtil.deleteBoard(boardId)
    .then(() => dispatch(removeBoard(boardId)))
    .fail(errors => dispatch(receiveBoardErrors(errors)));
};
