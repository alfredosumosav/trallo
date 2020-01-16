import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CardShow from './card_show';
import { requestCards, removeCard } from '../../actions/card_actions';
import { requestLists, removeLists } from '../../actions/list_actions';
import { requestBoard } from '../../actions/board_actions';

class CardShowEdit extends React.Component {

    componentDidMount() {
        this.props.requestCards();
        this.props.requestLists();
        // debugger
        // this.props.requestList(this.props.card.list_id);
    }

    // componentDidUpdate(prevProps) {
    //     debugger
    //     if (this.props.card !== prevProps.card) {
    //         this.props.requestList(this.props.card.list_id);
    //     }
    // }

    render() {

        if (this.props.card === undefined) {
            return null;
        }

        debugger

        
        return (
            <CardShow card={this.props.card} list={this.props.lists[this.props.card.list_id]} requestBoard={this.props.requestBoard} removeCard={this.props.removeCard} requestLists={this.props.requestLists} />
        )
    }
}

const mSTP = (state, ownProps) => {
    debugger
    return {
        card: state.entities.cards[ownProps.match.params.cardId],
        lists: state.entities.lists
    }
};

const mDTP = (dispatch, ownProps) => ({
    requestCards: () => dispatch(requestCards()),
    removeCard: cardId => dispatch(removeCard(cardId)),
    requestBoard: boardId => dispatch(requestBoard(boardId)),
    requestLists: () => dispatch(requestLists())
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