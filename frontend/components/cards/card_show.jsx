import React from 'react';
import { Link, Route, withRouter } from 'react-router-dom';
import CommentIndexContainer from '../comments/comment_index_container';

class CardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.card;
    this.state.comment_body = '';
    this.handleComment = this.handleComment.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("card[id]", this.state.id);
    formData.append("card[title]", this.state.title);
    formData.append("card[description]", this.state.description);
    formData.append("card[due_date]", this.state.due_date);
    formData.append("card[list_id]", this.state.list_id);
    this.props.updateCard(formData);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteCard(this.state.id).then(() => this.props.history.push(`/boards/${this.state.board_id}`));
  }

  handleComment(e) {
    e.preventDefault();
    let formData2 = new FormData();
    formData2.append("comment[body]", this.state.comment_body);
    formData2.append("comment[card_id]", this.state.id);
    this.props.createComment(formData2).then(() => {
      document.getElementById('new-comment-actions').classList.add('hidden2');
      this.setState({
        comment_body: ''
      }, (e) => {
        document.getElementById('textarea-input').classList.remove('big')
        document.getElementById('textarea-input').classList.add('small')
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    // debugger
    if (this.props.card !== prevProps.card) {
      this.setState({state: this.props.card});
      this.forceUpdate();
    }
  }


  render() {

    return (
      <div className="modal-background card-content-container" onClick={() => {
        this.props.history.push(`/boards/${this.state.board_id}`);
      }}>
        <div className="modal-child">

          <div className="card-show-content" onClick={e => e.stopPropagation()}>
            <div onClick={() => this.props.history.push(`/boards/${this.state.board_id}`)} className="close-card" >
              <i className="fas fa-times"></i>
            </div>
            <div className="card-show-details">
              <div className="card-header">
                <div className="card-title">
                  <div className="card-header-icon">
                    <i className="fas fa-pager"></i>
                  </div>

                  <div className="card-title-input card-title">
                    <form onSubmit={e => {
                      e.preventDefault();
                      e.target.elements[0].focus();
                      e.target.elements[0].blur();
                    }}>
                      <h2>
                        <input
                          id="card-title-input"
                          type="text"
                          value={this.state.title}
                          autoComplete="off"
                          onChange={this.update("title")}
                          onFocus={e => e.target.select()}
                          onBlur={e => this.handleSubmit(e)}
                          className="board-name card-title-label"
                        />
                      </h2>
                    </form>
                  </div>
                </div>

                <div className="card-current-list quiet">
                  <p>In list&nbsp;<strong>{this.state.list_title}</strong></p>
                </div>
              </div>

              <div className="card-main-container">
                <div className="card-main">
                  <div className="card-main-desc">
                    <div className="card-desc-title">
                      <div className="card-desc-icon">
                        <i className="fas fa-align-left"></i>
                      </div>

                      <h3>Description</h3>
                    </div>

                    <div className="card-desc-content">

                      <div className="card-desc-input-container">
                        <div className="card-desc-input">
                          <form onSubmit={e => {
                            e.target.elements[0].focus();
                            e.target.elements[0].blur();
                          }}>
                            <textarea
                              id="styled"
                              type="text"
                              value={this.state.description}
                              autoComplete="off"
                              placeholder="Add a more detailed description…"
                              onChange={this.update("description")}
                              onFocus={e => {
                                e.target.select();
                                document.getElementsByClassName('main-action-cont')[0].classList.remove('hidden2');
                              }}
                              // onClick={e => console.log('nothing')}
                              onBlur={e => {
                                document.getElementsByClassName('main-action-cont')[0].classList.add('hidden2');
                                if (e.relatedTarget && e.relatedTarget.className === "btn-cancel") {
                                  this.setState({
                                    description: this.props.card.description
                                  })
                                } else {
                                  this.handleSubmit(e);
                                }
                              }}
                              className="card-description-input"
                            />

                            <div>
                              
                            </div>

                            <div className="main-action-cont hidden2">
                              <input 
                              type="button"
                              value="Save"
                              className="btn-description btn-success"
                              />
                              <input 
                              id="cancel-desc"
                              type="button"
                              value="X"
                              className="btn-cancel"
                              />
                            </div>
                            
                          </form>
                        </div>

                        <div className="edit controls">
                          <div className="desc-save"></div>
                          <div className="desc-cancel"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="card-activity">
                    <div className="card-activity-title">
                      <div className="activity-icon">
                        <i className="fas fa-list-ul"></i>
                      </div>
                      <div className="activity-title">
                        <h3>Comments</h3>
                      </div>
                      <div className="activity-options"></div>
                    </div>

                    <div id="new-comment-b" className="new-comment-box">
                      <div className="comment-content-container">
                        <div className="comment-author">
                          <div className="author-avatar">
                            {this.state.author_username[0]}
                          </div>
                        </div>
                        <div className="comment-details-container">
                          <div className="card-comment-details">
                            <div className="comment-label">
                              <div className="comment-author-name">
                                {this.state.author_username}
                              </div>
                            </div>
                            <div id={`new-comment-input`} className="comment-input">
                              <form>
                                <textarea
                                  id="textarea-input"
                                  className="comment-title small"
                                  value={this.state.comment_body}
                                  placeholder="Write a comment..."
                                  onFocus={e => {
                                    document.getElementById('textarea-input').classList.remove('small');
                                    document.getElementById('textarea-input').classList.add('big');
                                    document.getElementById('new-comment-actions').classList.remove('hidden2');
                                  }}
                                  onChange={this.update("comment_body")}
                                />

                                <div id="new-comment-actions" className="comment-action-cont hidden2">
                                  <input
                                    type="button"
                                    value="Save"
                                    onClick={(e) => {
                                      this.handleComment(e);
                                    }}
                                    className="btn-description btn-success btn-save"
                                  />
                                  <input
                                    type="button"
                                    value="X"
                                    onClick={(e) => {
                                      document.getElementById(`new-comment-actions`).classList.add('hidden2');
                                      this.setState({
                                        comment_body: ''
                                      }, (e) => {
                                        document.getElementById('textarea-input').classList.remove('big');
                                        document.getElementById('textarea-input').classList.add('small');
                                      });
                                    }}
                                    className="btn-cancel"
                                  />
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="comments-container">
                      <CommentIndexContainer />
                      <div className="comment-actions"></div>
                    </div>
                  </div>
                </div>

                <div className="card-sidebar">
                  <div className="add-to-card">
                    <h3>Add To Card</h3>

                    <div className="add-to-card-actions">
                      <div className="button-link due-date-cont">
                        <div className="clock-icon"><i className="far fa-clock"></i></div>
                        <a href="#">Due Date</a>
                      </div>
                    </div>
                  </div>

                  <div className="sidebar-actions">
                    <h3>Actions</h3>

                    <div className="button-link move-card move-cont">
                      <div className="move-icon"><i className="fas fa-arrow-right"></i></div>
                      <div>
                        <a href="#">Move</a>
                      </div>
                    </div>

                    <div className="button-link copy-card copy-cont">
                      <div className="copy-icon"><i className="far fa-clone"></i></div>
                      <div>
                        <a href="#">Copy</a>
                      </div>
                    </div>

                    <div className="button-link share-card share-cont" onClick={(e) => {
                      e.preventDefault();
                      document.getElementsByClassName('url-cont')[0].classList.toggle('hidden2');
                      document.getElementById("url-text").select();
                    }}>
                      <div className="share-icon"><i className="fas fa-share-alt"></i></div>
                      <div>
                        <div>Share</div>
                      </div>
                    </div>

                    <div className="button-link copy-card url-cont hidden2">
                        <p>Share this url:</p>
                        <textarea 
                          id="url-text"
                          value={window.location.href}
                          wrap="off"
                          readOnly={true}
                        />
                        <div id="copy-state" className="btn-success" onClick={e => {
                          document.getElementById("url-text").select();
                          document.execCommand("copy");
                          document.getElementById('copy-state').innerText = "Copied!";
                        }} >
                          Copy
                        </div>
                    </div>

                    <div onClick={(e) => this.handleDelete(e)} className="button-link share-card delete-cont">
                      <div className="delete-icon"><i className="fas fa-minus"></i></div>
                      <div className="delete-txt">
                        Delete
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(CardShow);