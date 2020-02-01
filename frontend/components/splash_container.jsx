import Splash from "./splash";
import { connect } from "react-redux";
import { signup } from "../actions/session_actions";

const mDTP = dispatch => ({
  processForm: user => dispatch(signup(user))
});

export default connect(null, mDTP)(Splash);
