import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            photoFile: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleFile(e) {
        this.setState({
            photoFile: e.currentTarget.files[0]
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('board[title]', this.state.title);
        formData.append('board[photo]', this.state.photoFile);
        this.props.processForm(formData).then(this.props.closeModal);
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
                        <label>Photo:
                            <input type="file"
                                onChange={this.handleFile}
                            />
                        </label>
                        <input className="session-submit" type="submit" value={formType === 'create' ? 'Create Board' : 'Update Board'} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(BoardForm);