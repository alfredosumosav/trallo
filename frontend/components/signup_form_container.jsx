import SessionForm from "./session_form";
import { connect } from "react-redux";
import { signup, removeErrors } from "../actions/session_actions";

const mSTP = state => ({
  errors: state.errors.session,
  formType: "signup"
});

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user)),
  removeErrors: () => dispatch(removeErrors())
});

export default connect(mSTP, mDTP)(SessionForm);
