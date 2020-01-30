import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardShow from './card_show';
import { requestCard, updateCard, deleteCard, removeCard } from '../../actions/card_actions';
import { requestBoard } from '../../actions/board_actions';
import { createComment } from '../../actions/comment_actions';
import BoardShowContainer from '../boards/board_show_container';

class CardShowEdit extends React.Component {

    componentDidMount() {
        this.props.requestCard(this.props.match.params.cardId);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.location.pathname !== this.props.location.pathname) {
            this.props.removeCard(this.props.card.id);
            this.props.requestCard(this.props.match.params.cardId).then(() => this.forceUpdate());
        }
    }

    render() {
        if (this.props.card === undefined) {
            return null;
        }
        
        return (
            <div>
                <BoardShowContainer />
                <CardShow card={this.props.card} updateCard={this.props.updateCard} deleteCard={this.props.deleteCard} createComment={this.props.createComment} />
            </div>
        )
    }
}

const mSTP = (state, ownProps) => {
    return {
        card: state.entities.cards[ownProps.match.params.cardId],
        board: state.entities.boards[ownProps.match.params.boardId]
    }
};

const mDTP = (dispatch, ownProps) => ({
    requestCard: cardId => dispatch(requestCard(cardId)),
    updateCard: card => dispatch(updateCard(card)),
    deleteCard: cardId => dispatch(deleteCard(cardId)),
    requestBoard: boardId => dispatch(requestBoard(boardId)),
    removeCard: cardId => dispatch(removeCard(cardId)),
    createComment: comment => dispatch(createComment(comment))
});

export default withRouter(connect(mSTP, mDTP)(CardShowEdit));