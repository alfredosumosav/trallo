import { connect } from 'react-redux';
import CardShow from './card_show';
import { requestCard } from '../../actions/card_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = state => ({
    cards: Object.values(state.entities.cards[0]),
});

const mDTP = dispatch => ({
    requestCard: cardId => dispatch(requestCard(cardId)),
    closeModal: () => dispatch(closeModal())

});

export default connect(mSTP, mDTP)(CardShow);