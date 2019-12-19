import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import ListIndexContainer from '../lists/list_index_container';

class BoardShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleFav = this.handleFav.bind(this);
        this.handleArchive = this.handleArchive.bind(this);
        this.delete = this.delete.bind(this);
    }

    update(field) {
        return e => {
            // debugger
            this.setState({ [field]: e.currentTarget.value });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        let formData = new FormData();
        formData.append('board[id]', this.state.id);
        formData.append('board[title]', this.state.title);
        formData.append('board[photo]', this.state.photoFile);
        formData.append('board[favorited]', this.state.favorited);
        formData.append('board[archived]', this.state.archived);
        this.props.updateBoard(formData);
    }

    delete(boardId) {
        this.props.deleteBoard(boardId).then(() => this.props.history.push('/'));
    }

    focusInput(e) {
        document.getElementById('title-text').classList.add('hidden2');
        document.getElementById('title-input').classList.remove('hidden2');
        document.getElementById('title-input').select();
    }

    blurInput(e) {
        e.preventDefault();
        document.getElementById('title-input').classList.add('hidden2');
        document.getElementById('title-text').classList.remove('hidden2');
    }

    handleFile(e) {
        this.setState({
            photoFile: e.currentTarget.files[0]
        })
    }

    handleFav(e) {
        e.preventDefault();
        return this.setState({
            favorited: !this.state.favorited
        });
    }

    handleArchive(e) {
        e.preventDefault();
        let formData = new FormData();
        formData.append('board[id]', this.state.id);
        formData.append('board[title]', this.state.title);
        formData.append('board[photo]', this.state.photoFile);
        formData.append('board[favorited]', this.state.favorited);
        formData.append('board[archived]', this.state.archived);
        this.props.updateBoard(formData);
    }

    render() {
        // debugger
        let img;

        if (this.props.board.photoUrl) {
            img = <img src={this.props.board.photoUrl} className="image"></img>
            let s = "s"
        } else {
            img = ""
        }
        if (this.props.board.archived) {
            return (
                <div className="board-show-container">
                    <div className="boards-header-name b-closed">
                        <h1>{this.props.board.title} is closed!</h1>
                    </div>
                    <div className="b-closed-actions">
                        <span onClick={(e) => {
                                this.state.archived = !this.state.archived;
                                this.setState({
                                    archived: this.state.archived
                                });
                                this.handleArchive(e);
                            }} className="">
                            Re-open
                        </span>

                        <span onClick={() => this.delete(this.state.id)} className="">Permanently Delete Board...</span>
                    </div>
                </div>
            )
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
                        <form onSubmit={(e) => this.blurInput(e)}>
                            <input 
                            id="title-input"
                            type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            onBlur={(e) => this.handleSubmit(e)}
                            className="board-name hidden2"
                            />
                            <label className="in photo-up hidden2">
                                <div>
                                    Photo:
                                </div>
                                <input
                                    id="file-input"
                                    type="file"
                                    onChange={(e) => {
                                        this.handleFile(e);
                                        this.focusInput(e);
                                        this.blurInput(e);
                                    }}
                                />
                            </label>
                        </form>
                    </div>
                    <div className="nav-actions nav-ele">
                        <div className="bg-board">
                            <label className="in photo-up">
                                <div className="bg-update-text">
                                    Update background
                                </div>
                                <input
                                    id="file-input"
                                    type="file"
                                    onChange={(e) => {
                                        this.handleFile(e);
                                        this.focusInput(e);
                                        this.blurInput(e);
                                    }}
                                />
                            </label>
                        </div>
                        <div className="star-board">
                            <i onClick={(e) => {
                                this.handleFav(e);
                                this.focusInput(e);
                                this.blurInput(e);
                            }} className={`far fa-star btn board-name ${this.state.favorited === true ? 'yellow' : ''}`}></i>
                        </div>
                        <div className="trash-can board-name">
                            <i onClick={() => this.delete(this.state.id)} className="far fa-trash-alt btn"></i>
                        </div>
                        <div className="archive-board board-name">
                            <i onClick={(e) => {
                                this.state.archived = !this.state.archived;
                                this.setState({
                                    archived: this.state.archived
                                });
                                this.handleArchive(e);
                            }} className={`fas fa-archive btn`}></i>
                        </div>
                    </div>
                </div>
                <div id="bl-container" className="">
                    {
                        <ListIndexContainer />
                    }
                    {/* {
                        lists.map((list, id) => <ListIndexItem key={id} list={list} />)
                    } */}
                    <div className="board-list-container">
                        <div className="list-content-container new-list">
                            <div className="board-list-title">
                                <h2><i className="fas fa-plus"></i> Add a list</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(BoardShow);