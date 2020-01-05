import { connect } from 'react-redux';
import ListIndex from './list_index';
import { requestLists, updateList, deleteList, removeLists } from '../../actions/list_actions';
import { requestCards, createCard, removeCards } from '../../actions/card_actions';

const mSTP = state => ({
    lists: Object.values(state.entities.lists),
    cards: Object.values(state.entities.cards)
});

const mDTP = dispatch => ({
    requestLists: boardId => dispatch(requestLists(boardId)),
    updateList: list => dispatch(updateList(list)),
    deleteList: listId => dispatch(deleteList(listId)),
    removeLists: () => dispatch(removeLists()),
    requestCards: boardId => dispatch(requestCards(boardId)),
    createCard: card => dispatch(createCard(card)),
    removeCards: () => dispatch(removeCards())
});

export default connect(mSTP, mDTP)(ListIndex);