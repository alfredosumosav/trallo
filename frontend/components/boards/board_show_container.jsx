import React from 'react';
import { connect } from 'react-redux';
import BoardShow from './board_show';
import { requestBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import { requestLists, createList, requestList, updateList, deleteList } from '../../actions/list_actions';

class BoardShowEdit extends React.Component {
    componentDidMount() {
        // debugger
        this.props.requestBoard(this.props.match.params.boardId);
    }

    render() {
        // debugger
        if (this.props.board === undefined) {
            return null;
        }

        return (
            <BoardShow board={this.props.board} updateBoard={this.props.updateBoard} deleteBoard={this.props.deleteBoard} />
        )
    }
}

const mSTP = (state, ownProps) => {
    return ({
        board: state.entities.boards[ownProps.match.params.boardId],
    })
};

const mDTP = (dispatch, ownProps) => ({
    requestBoard: boardId => dispatch(requestBoard(boardId)),
    updateBoard: board => dispatch(updateBoard(board)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
});

export default connect(mSTP, mDTP)(BoardShowEdit);