import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import BoardShow from './board_show';
import { requestBoard, updateBoard, deleteBoard, removeBoards } from '../../actions/board_actions';
import { createList, removeLists } from '../../actions/list_actions';
import { removeCards } from '../../actions/card_actions';

class BoardShowEdit extends React.Component {
    componentDidMount() {
        this.props.requestBoard(this.props.match.params.boardId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.props.requestBoard(this.props.match.params.boardId).then(() => this.forceUpdate());
        }
    }

    render() {
        if (this.props.board === undefined) {
            return null;
        }

        return (
            <BoardShow board={this.props.board} updateBoard={this.props.updateBoard} deleteBoard={this.props.deleteBoard} createList={this.props.createList} />
        )
    }
}

const mSTP = (state, ownProps) => {
    return ({
        board: state.entities.boards[ownProps.match.params.boardId]
    })
};

const mDTP = (dispatch, ownProps) => ({
    requestBoard: boardId => dispatch(requestBoard(boardId)),
    updateBoard: board => dispatch(updateBoard(board)),
    deleteBoard: boardId => dispatch(deleteBoard(boardId)),
    removeBoard: boardId => dispatch(removeBoard(boardId)),
    createList: list => dispatch(createList(list)),
    removeLists: () => dispatch(removeLists()),
    removeCards: () => dispatch(removeCards()),
    removeBoards: () => dispatch(removeBoards())
});

export default withRouter(connect(mSTP, mDTP)(BoardShowEdit));