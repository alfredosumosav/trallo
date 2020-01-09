import { connect } from 'react-redux';
import CardIndex from './card_index';
import { openModal } from '../../actions/modal_actions';
import { requestCards } from '../../actions/card_actions';

const mSTP = state => ({

});

const mDTP = dispatch => ({
    openModal: modal => dispatch(openModal(modal))
    // requestCards: data => dispatch(requestCards(data)),
    // updateCard: card => dispatch(updateCard(card)),
    // deleteCard: cardId => dispatch(deleteCard(cardId)),
    // removeCards: () => dispatch(removeCards())
});

export default connect(mSTP, mDTP)(CardIndex);