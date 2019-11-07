import Splash from './splash';
import { connect } from 'react-redux';
import { signup, removeErrors } from '../actions/session_actions';

const mSTP = state => ({

});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(Splash);