import SessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../actions/session_actions';

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);