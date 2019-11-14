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
        this.props.updateBoard(this.state);
    }

    delete(boardId) {
        this.props.deleteBoard(boardId);
    }

    render() {
        return (
            <div className="board-show-container">
                <div className="row board-bar">
                    <div className="board-title">
                        <div className="board-name">{this.state.title}</div>
                        <form onSubmit={this.handleSubmit}>
                            <input 
                                type="text"
                                value={this.state.title}
                                onChange={this.update('title')}
                            />
                            <input type="submit" value={'update'}/>  
                        </form>
                    </div>
                    <div className="star-board">
                        <i className="far fa-star btn"></i>
                    </div>
                    <div className="trash-can">
                        <i onClick={() => this.delete(this.state.id)} className="far fa-trash-alt btn"></i>
                    </div>
                </div>
                <div className="list-container">
                    <h1>List 1</h1>
                    <h1>List 2</h1>
                    <h1>List 3</h1>
                    <h1>List 4</h1>
                </div>
            </div>
        );
    }
}

export default BoardShow;