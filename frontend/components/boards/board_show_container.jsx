import { connect } from 'react-redux';
import BoardShow from './board_show';
import { requestBoard } from '../../actions/board_actions';

const mSTP = (state, ownProps) => {
    debugger
    return ({
        board: state.entities.boards[ownProps.match.params.boardId]
    })
};

const mDTP = dispatch => ({
    requestBoard: boardId => dispatch(requestBoard(boardId)),

});

export default connect(mSTP, mDTP)(BoardShow);