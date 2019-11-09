import * as BoardAPIUtil from '../utils/board_api_util';

export const RECEIVE_BOARDS = 'RECEIVE_BOARDS';
export const RECEIVE_BOARD = 'RECEIVE_BOARD';
export const REMOVE_BOARD = 'REMOVE_BOARD';

const receiveBoards = boards => ({
    type: RECEIVE_BOARDS,
    boards
});

const receiveBoard = board => ({
    type: RECEIVE_BOARD,
    board
});

const removeBoard = boardId => ({
    type: REMOVE_BOARD,
    boardId
});

export const requestBoards = () => dispatch => {
    return BoardAPIUtil.fetchBoards()
        .then(boards => dispatch(receiveBoards(boards)))
};

export const requestBoard = boardId => dispatch => {
    return BoardAPIUtil.fetchBoard(boardId)
        .then(board => dispatch(receiveBoard(board)))
};

export const createBoard = board => dispatch => {
    return BoardAPIUtil.createBoard(board)
        .then(createdBoard => dispatch(receiveBoard(createdBoard)))
};

export const updateBoard = board => dispatch => {
    return BoardAPIUtil.updateBoard(board)
        .then(updatedBoard => dispatch(receiveBoard(updatedBoard)))
};

export const deleteBoard = boardId => dispatch => {
    return BoardAPIUtil.deleteBoard(boardId)
        .then(() => dispatch(removeBoard(boardId)))
};