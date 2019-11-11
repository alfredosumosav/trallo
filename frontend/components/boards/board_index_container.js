import { connect } from 'react-redux';
import BoardIndex from './board_index';
import { requestBoards } from '../../actions/board_actions';

const mSTP = state => ({
    boards: Object.values(state.entities.boards)
});

const mDTP = dispatch => ({
    requestBoards: () => dispatch(requestBoards())
});

export default connect(mSTP, mDTP)(BoardIndex);