import React from "react";
import { Link } from "react-router-dom";
import Footer from "./footer";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.removeErrors();
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  renderErrors() {
    return (
      <ul className="error-list">
        {this.props.errors.map((error, i) => (
          <li className="error-item" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { formType, loggedIn } = this.props;
    return (
      <div id="form-container">
        <form id="session-form" onSubmit={this.handleSubmit}>
          <div id="form-elements-container">
            {this.renderErrors()}
            <h1 className="form-title">
              {formType === "signup" ? "Sign up to Trallo" : "Log in to Trallo"}
            </h1>
            <div id="input-container">
              <input
                className="form-input"
                type="text"
                autoCapitalize="off"
                autoFocus="autofocus"
                value={this.state.username}
                placeholder="Enter username"
                onChange={this.update("username")}
              />
              {formType === "signup" ? (
                <input
                  className="form-input"
                  type="email"
                  autoCapitalize="off"
                  value={this.state.email}
                  placeholder="Enter email"
                  onChange={this.update("email")}
                />
              ) : (
                ""
              )}
              <input
                className="form-input"
                type="password"
                value={this.state.password}
                placeholder="Enter password"
                onChange={this.update("password")}
              />
            </div>
            <div id="submit-container">
              <input
                id="submit-btn"
                className="btn"
                type="submit"
                value={formType === "signup" ? "Sign Up" : "Log In"}
              />
            </div>
          </div>
        </form>
        <ul className="bottom-form-link">
          {formType === "login" ? (
            <Link id="toggle-form" className="btn" to={"/signup"}>
              Sign up for an account
            </Link>
          ) : (
            <Link id="toggle-form" className="btn" to={"/login"}>
              Already have an account? Log in
            </Link>
          )}
        </ul>
        <div id="footer-container2">
          <Footer />
        </div>
      </div>
    );
  }
}

export default SessionForm;
