import { connect } from 'react-redux';
import ListIndex from './list_index';
import { requestLists } from '../../actions/list_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    lists: Object.values(state.entities.lists)
});

const mDTP = dispatch => ({
    requestLists: boardId => dispatch(requestLists(boardId)),

});

export default connect(mSTP, mDTP)(ListIndex);