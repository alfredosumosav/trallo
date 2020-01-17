import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { requestBoards, removeBoards } from '../../actions/board_actions';
import { requestLists } from '../../actions/list_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    boards: Object.values(state.entities.boards),
});

const mDTP = dispatch => ({
    requestBoards: () => dispatch(requestBoards()),
    removeBoards: () => dispatch(removeBoards()),
    openModal: modal => dispatch(openModal(modal))

});

export default connect(mSTP, mDTP)(BoardIndex);