import {
  RECEIVE_CARDS,
  RECEIVE_CARD,
  REMOVE_CARD,
  REMOVE_CARDS
} from "../actions/card_actions";

const cardsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CARDS:
      return action.cards;
    case RECEIVE_CARD:
      let card = Object.values(action.card)[0];
      nextState[card.id] = card;
      return nextState;
    case REMOVE_CARD:
      delete nextState[action.cardId];
      return nextState;
    case REMOVE_CARDS:
      return {};
    default:
      return oldState;
  }
};

export default cardsReducer;
