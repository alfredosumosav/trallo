import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

class BoardShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.delete = this.delete.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateBoard(this.state).then(() => this.blurInput());
    }

    delete(boardId) {
        this.props.deleteBoard(boardId).then(() => this.props.history.push('/'));
    }

    focusInput() {
        // document.getElementById('title-input').focus();
        document.getElementById('title-text').classList.add('hidden2');
        document.getElementById('title-input').classList.remove('hidden2');
        document.getElementById('title-input').select();
    }

    blurInput() {
        document.getElementById('title-input').classList.add('hidden2');
        document.getElementById('title-text').classList.remove('hidden2');
        this.handleSubmit();
    }

    render() {
        let img;

        if (this.props.board.photoUrl) {
            img = <img src={this.props.board.photoUrl} className="image"></img>
            let s = "s"
        } else {
            img = ""
        }
        return (
            <div className="board-show-container">
                <div className="board-bg">
                <div className="overlay2"></div>
                    {img}
                </div>
                <div className="row board-bar">
                    <div className="board-title nav-ele">
                        <div id="title-text" onClick={this.focusInput} className="board-name">
                            {this.state.title}
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                            id="title-input"
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            onBlur={this.handleSubmit}
                            className="board-name hidden2"
                            />
                        </form>
                    </div>
                    <div className="nav-actions nav-ele">
                        <div className="star-board">
                            <i className="far fa-star btn board-name"></i>
                        </div>
                        <div className="trash-can board-name">
                            <i onClick={() => this.delete(this.state.id)} className="far fa-trash-alt btn"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <h1>List 1</h1>
                    <h1>List 2</h1>
                    <h1>List 3</h1>
                    <h1>List 4</h1>
                </div>
            </div>
        );
    }
}

export default withRouter(BoardShow);