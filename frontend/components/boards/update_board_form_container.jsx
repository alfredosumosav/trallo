import { connect } from 'react-redux';
import { updateBoard, removeErrors } from '../../actions/board_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import BoardForm from './board_form';

const mSTP = (state, ownProps) => ({
    errors: state.errors.board,
    formType: 'update'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: board => dispatch(updateBoard(board)),
    removeErrors: () => dispatch(removeErrors()),
    closeModal: () => dispatch(closeModal())
});

export default connect(mSTP, mDTP)(BoardForm);