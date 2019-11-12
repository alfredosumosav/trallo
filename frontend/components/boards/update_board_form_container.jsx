import React from 'react';
import { connect } from 'react-redux';
import { updateBoard, removeErrors, requestBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';

// class UpdateBoardForm extends React.Component {
//     componentDidMount() {
//         this.props.requestBoard(this.props.match.params.boardId);
//     }

//     render() {
//         // DO NOT MODIFY THIS FUNCTION
//         const { board, formType, processForm } = this.props;

//         // Hint: The event will not exist on the first render - what do we need to do
//         // to get it?
//         if (!board) return null;
//         return (
//             <BoardForm
//                 board={board}
//                 formType={formType}
//                 submitEvent={submitEvent} />
//         );
//     }
// }

const mSTP = (state, ownProps) => ({
    errors: state.errors.board,
    formType: 'update'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: board => dispatch(updateBoard(board)),
    requestBoard: boardId => dispatch(requestBoard(boardId)),
    removeErrors: () => dispatch(removeErrors()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(BoardForm);