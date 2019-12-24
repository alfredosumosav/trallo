import React from 'react';
import { withRouter } from 'react-router-dom';

class BoardForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            photoFile: ''
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
                    <li className="in" key={`error-${i}`}>
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
                    <div onClick={this.props.closeModal} className="close-x"><span><i className="fas fa-times"></i></span></div>
                    {this.renderErrors()}
                    <div className="in form-name">
                        {formType === 'create' ? 'Create a Board' : 'Update a Board'}
                    </div>
                    <div className="board-form">
                        <label id="i-title" className="in">
                            <input type="text"
                                value={this.state.title}
                                onChange={this.update('title')}
                                className="login-input"
                                autoFocus="autofocus"
                                placeholder="Enter board title"
                            />
                        </label>
                        <div className="inputfile-container">
                            <input
                                type="file"
                                name="file"
                                id="file"
                                onChange={e => {
                                    this.handleFile(e);
                                }}
                                className="inputfile"
                                data-multiple-caption="{count} files selected" multiple
                            />
                            <label className="board-name inputlabel dark-text" htmlFor="file">
                                <i className="fas fa-upload"></i>
                                <strong>Update background...</strong>
                            </label>
                        </div>
                        <input className="in session-submit btn-success" type="submit" value={formType === 'create' ? 'Create Board' : 'Update Board'} />
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(BoardForm);