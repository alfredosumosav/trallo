import { connect } from 'react-redux';
import CardIndex from './card_index';
import { requestCards, updateCard, deleteCard, removeCards } from '../../actions/card_actions';

const mSTP = state => ({
    lists: Object.values(state.entities.lists)
});

const mDTP = dispatch => ({
    requestCards: listId => dispatch(requestCards(listId)),
    updateCard: card => dispatch(updateCard(card)),
    deleteCard: cardId => dispatch(deleteCard(cardId)),
    removeCards: () => dispatch(removeCards())
});

export default connect(mSTP, mDTP)(CardIndex);