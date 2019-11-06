import React from 'react';
import { Link, Redirect } from 'react-router-dom';

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

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
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
                     { error }
                 </li>   
                ))}
            </ul>
        );
    }

    render() {
        const { formType, loggedIn } = this.props;
        return (
            <div id="session-form">
                <form onSubmit={this.handleSubmit}>
                    {this.renderErrors()}
                    <h1>{ formType === 'signup' ? 'Sign Up' : 'Log In'}</h1>
                    <label>Username
                        <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        />
                    </label>
                    <br/>
                    {formType === 'signup' ? 
                        (<label>Email
                            <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            />
                            <br />
                        </label>
                        ) : ""
                    }
                    <label>Password
                        <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                    </label>
                    <br/>
                    <input className="btn" type="submit" value={ formType === 'signup' ? 'Sign Up' : 'Log In' } />
                    <ul className="bottom-form-link">
                        { formType === 'login' ? <Link className="btn" to={'/signup'} >Sign up for an account</Link> : <Link className="btn" to={'/login'} >Already have an account? Log in</Link> }
                    </ul>
                </form>
            </div>
        );
    }
}

export default SessionForm;