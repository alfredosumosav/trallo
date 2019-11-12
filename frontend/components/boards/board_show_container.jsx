import { connect } from 'react-redux';
import BoardShow from './board_show';
import { requestBoards, requestBoard } from '../../actions/board_actions';
// import { openModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => ({
    board: state.entities.boards[ownProps.match.params.boardId],
    boardAuthor: state.entities.users[state.entities.boards[ownProps.match.params.boardId].author_id]
});

const mDTP = dispatch => ({
    requestBoard: () => dispatch(requestBoard()),
    openModal: modal => dispatch(openModal(modal))

});

export default connect(mSTP, mDTP)(BoardShow);