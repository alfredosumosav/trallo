import { connect } from 'react-redux';
import { createBoard, removeErrors, requestBoard } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';

const mSTP = (state, ownProps) => ({
    errors: state.errors.board,
    board: {
        title: "",
        photoFile: ""
    },
    formType: 'create'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: board => dispatch(createBoard(board)),
    removeErrors: () => dispatch(removeErrors()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(BoardForm);