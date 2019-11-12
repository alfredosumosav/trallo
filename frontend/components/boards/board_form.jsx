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
        this.props.processForm(this.state).then(this.props.closeModal);
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
        const { formType } = this.props;
        return (
            <div className="board-form-container">
                <form onSubmit={this.handleSubmit} className="board-form-box">
                    <br />
                    <div onClick={this.props.closeModal} className="close-x">X</div>
                    {this.renderErrors()}
                    {formType === 'create' ? 'Create a Board' : 'Update a Board'}
                    <div className="board-form">
                        <br />
                        <label>Title:
                            <input type="text"
                                value={this.state.title}
                                onChange={this.update('title')}
                                className="login-input"
                            />
                        </label>
                        <br />
                        <input className="session-submit" type="submit" value={formType === 'create' ? 'Create Board' : 'Update Board'} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(BoardForm);