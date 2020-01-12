import React from 'react';
import { connect } from 'react-redux';
import CardShow from './card_show';
import { requestCard } from '../../actions/card_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

class CardShowEdit extends React.Component {
    componentDidMount() {
        // this.props.requestCard()
    }
}

const mSTP = (state, ownProps) => {
    // debugger
    return null;
};

const mDTP = (dispatch, ownProps) => ({
    requestCard: cardId => dispatch(requestCard(cardId)),
    closeModal: () => dispatch(closeModal())

});

export default connect(mSTP, mDTP)(CardShowEdit);
















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