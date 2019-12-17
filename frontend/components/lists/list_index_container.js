import { connect } from 'react-redux';
import ListIndex from './list_index';
import { requestLists } from '../../actions/list_actions';
import { openModal } from '../../actions/modal_actions';

const mSTP = state => ({
    boards: Object.values(state.entities.boards),
    lists: Object.values(state.entities.lists)
});

const mDTP = dispatch => ({
    requestLists: () => dispatch(requestLists()),
    openModal: modal => dispatch(openModal(modal))

});

export default connect(mSTP, mDTP)(ListIndex);