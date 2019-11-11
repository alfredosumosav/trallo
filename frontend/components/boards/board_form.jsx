import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const board = Object.assign({}, this.state);
        this.props.processForm(board).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="board-form-container">
                <form onSubmit={this.handleSubmit} className="board-form-box">
                    {formType === 'create' ? 'Create a Board' : 'Update a Board'}
                    <br />
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    <div className="board-form">
                        <br />
                        <label>Username:
                            <input type="text"
                                            value={this.state.username}
                                            onChange={this.update('username')}
                                            className="login-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                            <input type="password"
                                            value={this.state.password}
                                            onChange={this.update('password')}
                                            className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={ formType === 'create' ? 'Create Board' : 'Update Board' } />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(BoardForm);
