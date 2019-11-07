import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login, removeErrors } from '../actions/session_actions';

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user)),
    removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(SessionForm);