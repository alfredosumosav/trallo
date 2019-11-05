import React from 'react';
import { Link } from 'react-router-dom';

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

    render() {
        // debugger
        const { formType } = this.props;
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <h1>{ formType === 'signup' ? 'Sign Up' : 'Log In'}</h1>
                    <label>Username
                        <input 
                        type="text"
                        value={this.state.username}
                        onChange={this.update('username')}
                        />
                    </label>
                    {formType === 'signup' ? 
                        (<label>Email
                            <input 
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            />
                        </label>) : ""
                    }
                    <label>Password
                        <input 
                        type="password"
                        value={this.state.password}
                        onChange={this.update('password')}
                        />
                    </label>
                    <input type="submit" value={ formType === 'signup' ? 'Sign Up' : 'Log In' } />
                </form>
                { formType === 'login' ? <Link to={'/signup'} >Sign Up</Link> : <Link to={'/login'} >Log In</Link> }
            </div>
        );
    }
}

export default SessionForm;