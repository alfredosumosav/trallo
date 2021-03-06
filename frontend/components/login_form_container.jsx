import SessionForm from "./session_form";
import { connect } from "react-redux";
import { login, removeErrors } from "../actions/session_actions";

const mSTP = state => ({
  errors: state.errors.session,
  formType: "login"
});

const mDTP = dispatch => ({
  processForm: user => dispatch(login(user)),
  removeErrors: () => dispatch(removeErrors()),
  login: user => dispatch(login(user))
});

export default connect(mSTP, mDTP)(SessionForm);
