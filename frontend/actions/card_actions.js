import * as CardAPIUtil from '../utils/card_api_utils';

export const RECEIVE_CARDS = 'RECEIVE_CARDS';
export const RECEIVE_CARD = 'RECEIVE_CARD';
export const RECEIVE_CARD_ERRORS = 'RECEIVE_CARD_ERRORS';
export const REMOVE_CARD = 'REMOVE_CARD';
export const REMOVE_CARDS = 'REMOVE_CARDS';
export const REMOVE_ERRORS = 'REMOVE_ERRORS';

const receiveCards = cards => ({
    type: RECEIVE_CARDS,
    cards
});

const receiveCard = card => ({
    type: RECEIVE_CARD,
    card
});

const removeCard = cardId => ({
    type: REMOVE_CARD,
    cardId
});

const receiveCardErrors = errors => ({
    type: RECEIVE_CARD_ERRORS,
    errors
});

export const removeCards = () => ({
    type: REMOVE_CARDS
});

export const removeErrors = () => ({
    type: REMOVE_ERRORS
});

export const requestCards = filters => dispatch => {
    return CardAPIUtil.fetchCards(filters)
        .then(cards => dispatch(receiveCards(cards)))
        .fail(errors => dispatch(receiveCardErrors(errors)));
};

export const requestCard = cardId => dispatch => {
    return CardAPIUtil.fetchCard(cardId)
        .then(card => dispatch(receiveCard(card)))
        .fail(errors => dispatch(receiveCardErrors(errors)));
};

export const createCard = card => dispatch => {
    return CardAPIUtil.createCard(card)
        .then(card => dispatch(receiveCard(card)))
        .fail(errors => dispatch(receiveCardErrors(errors)));
};

export const updateCard = card => dispatch => {
    return CardAPIUtil.updateCard(card)
        .then(card => dispatch(receiveCard(card)))
        .fail(errors => dispatch(receiveCardErrors(errors)));
};

export const deleteCard = cardId => dispatch => {
    return CardAPIUtil.deleteCard(cardId)
        .then(() => dispatch(removeCard(cardId)))
        .fail(errors => dispatch(receiveCardErrors(errors)));
};