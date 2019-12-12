import React from 'react';
import { connect } from 'react-redux';
import BoardShow from './board_show';
import { requestBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
import { requestLists, requestList, updateList, deleteList } from '../../actions/list_actions';

class BoardShowEdit extends React.Component {
    componentDidMount() {
        // debugger
        this.props.requestBoard(this.props.match.params.boardId);
        this.props.requestLists(this.props.match.params);
    }

    render() {
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
        lists: state.entities.lists
    })
};

const mDTP = (dispatch, ownProps) => ({
    requestBoard: boardId => dispatch(requestBoard(boardId)),
    updateBoard: board => dispatch(updateBoard(board)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
    requestLists: boardId => dispatch(requestLists(boardId))
});

export default connect(mSTP, mDTP)(BoardShowEdit);