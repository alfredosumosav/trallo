import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardShow from './card_show';
import { requestCard, updateCard, removeCard } from '../../actions/card_actions';
import { requestList, requestLists, removeLists } from '../../actions/list_actions';
import { requestBoard } from '../../actions/board_actions';

class CardShowEdit extends React.Component {

    componentDidMount() {
        this.props.requestCard(this.props.match.params.cardId);
    }

    render() {

        if (this.props.card === undefined) {
            return null;
        }
        
        return (
            <CardShow card={this.props.card} updateCard={this.props.updateCard} removeCard={this.props.removeCard} />
        )
    }
}

const mSTP = (state, ownProps) => {
    return {
        card: state.entities.cards[ownProps.match.params.cardId],
    }
};

const mDTP = (dispatch, ownProps) => ({
    requestCard: cardId => dispatch(requestCard(cardId)),
    updateCard: card => dispatch(updateCard(card)),
    removeCard: cardId => dispatch(removeCard(cardId)),
});

export default withRouter(connect(mSTP, mDTP)(CardShowEdit));
















// import React from 'react';
// import { connect } from 'react-redux';
// import BoardShow from './board_show';
// import { requestBoard, updateBoard, deleteBoard } from '../../actions/board_actions';
// import { createList } from '../../actions/list_actions';

// class BoardShowEdit extends React.Component {
//     componentDidMount() {
//         this.props.requestBoard(this.props.match.params.boardId);
//     }

//     render() {
//         if (this.props.board === undefined) {
//             return null;
//         }

//         return (
//             <BoardShow board={this.props.board} updateBoard={this.props.updateBoard} deleteBoard={this.props.deleteBoard} createList={this.props.createList} />
//         )
//     }
// }

// const mSTP = (state, ownProps) => {
//     return ({
//         board: state.entities.boards[ownProps.match.params.boardId]
//     })
// };

// const mDTP = (dispatch, ownProps) => ({
//     requestBoard: boardId => dispatch(requestBoard(boardId)),
//     updateBoard: board => dispatch(updateBoard(board)),
//     deleteBoard: boardId => dispatch(deleteBoard(boardId)),
//     createList: list => dispatch(createList(list))
// });

// export default connect(mSTP, mDTP)(BoardShowEdit);