import { connect } from 'react-redux';
import ListIndex from './list_index';
import { requestLists, updateList, deleteList, removeLists } from '../../actions/list_actions';

const mSTP = state => ({
    lists: Object.values(state.entities.lists)
});

const mDTP = dispatch => ({
    requestLists: boardId => dispatch(requestLists(boardId)),
    updateList: list => dispatch(updateList(list)),
    deleteList: listId => dispatch(deleteList(listId)),
    removeLists: () => dispatch(removeLists())
});

export default connect(mSTP, mDTP)(ListIndex);