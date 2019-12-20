import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';
import ListIndexContainer from '../lists/list_index_container';

class BoardShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board;
        this.state.list_title = '';
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleFav = this.handleFav.bind(this);
        this.handleArchive = this.handleArchive.bind(this);
        this.handleNewList = this.handleNewList.bind(this);
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

    focusInputList(e) {
        document.getElementById('title-text').classList.add('hidden2');
        document.getElementById('title-input').classList.remove('hidden2');
        document.getElementById('title-input').select();
    }

    handleFile(e) {
        this.setState({
            photoFile: e.currentTarget.files[0]
        })
    }

    handleNewList(e) {
        e.preventDefault();
        // debugger

        let listFormData = new FormData();
        listFormData.append('list[title]', this.state.list_title);
        listFormData.append('list[board_id]', this.state.id);
        this.props.createList(listFormData).then(() => {
            this.setState({
                list_title: ''
            });
            document.getElementById('list-input').classList.add('hidden2');
            document.getElementById('list-input2').classList.add('hidden2');
            document.getElementById('submit-list-input').classList.add('hidden2');
            document.getElementById('list-text').classList.remove('hidden2');
        });
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
                <div
                  id="title-text"
                  onClick={this.focusInput}
                  className="board-name"
                >
                  {this.state.title}
                </div>
                <form onSubmit={e => this.blurInput(e)}>
                  <input
                    id="title-input"
                    type="text"
                    value={this.state.title}
                    onChange={this.update("title")}
                    onBlur={e => this.handleSubmit(e)}
                    className="board-name hidden2"
                  />
                  <label className="in photo-up hidden2">
                    <div>Photo:</div>
                    <input
                      id="file-input"
                      type="file"
                      onChange={e => {
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
                    <div className="bg-update-text">Update background</div>
                    <input
                      id="file-input"
                      type="file"
                      onChange={e => {
                        this.handleFile(e);
                        this.focusInput(e);
                        this.blurInput(e);
                      }}
                    />
                  </label>
                </div>
                <div className="star-board board-name">
                  <i
                    onClick={e => {
                      this.handleFav(e);
                      this.focusInput(e);
                      this.blurInput(e);
                    }}
                    className={`far fa-star btn ${
                      this.state.favorited === true ? "yellow" : ""
                    }`}
                  ></i>
                </div>
                <div className="trash-can board-name">
                  <i
                    onClick={() => this.delete(this.state.id)}
                    className="far fa-trash-alt btn"
                  ></i>
                </div>
                <div className="archive-board board-name">
                  <i
                    onClick={e => {
                      this.state.archived = !this.state.archived;
                      this.setState({
                        archived: this.state.archived
                      });
                      this.handleArchive(e);
                    }}
                    className={`fas fa-archive btn`}
                  ></i>
                </div>
              </div>
            </div>
            <div id="bl-container" className="">
              {<ListIndexContainer />}
              <div className="board-list-container">
                <div className="list-content-container new-list">
                  <div
                    id="list-text"
                    onClick={e => {
                      document.getElementById("list-text").classList.add("hidden2");
                      document.getElementById("list-input").classList.remove("hidden2");
                      document.getElementById("submit-list-input").classList.remove("hidden2");
                      document.getElementById("list-input2").classList.remove("hidden2");
                      document.getElementById("list-actions-container").classList.remove("hidden2");
                      document.getElementById("list-input").select();
                    }}
                    className="board-list-title">
                    <div className="list-text">
                      <i className="fas fa-plus"></i> Add a list
                    </div>
                  </div>
                  <form
                    id="list-f"
                    onSubmit={e => {
                      this.handleNewList(e);
                    }}>
                      <input
                        id="list-input"
                        type="text"
                        value={this.state.list_title}
                        autoComplete="off"
                        placeholder="Enter list title..."
                        onChange={this.update("list_title")}
                        className="board-list-title list-input hidden2"
                      />
                    <div id="list-actions-container" className="list-input hidden2">
                        <div onClick={this.handleNewList} id="submit-list-input" className="btn-success list-input hidden2">
                          Add List
                        </div>
                        <div
                          id="list-input2"
                          className="list-input hidden2 board-name"
                          onClick={e => {
                              this.setState({
                                list_title: ""
                              });
                              document.getElementById("list-input").classList.add("hidden2");
                              document.getElementById("submit-list-input").classList.add("hidden2");
                              document.getElementById("list-input2").classList.add("hidden2");
                              document.getElementById("list-actions-container").classList.add("hidden2");
                              document.getElementById("list-text").classList.remove("hidden2");
                          }}>
                            <div className="btn">
                              <i className="fas fa-times"></i>
                            </div>
                        </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(BoardShow);