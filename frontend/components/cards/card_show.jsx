import React from 'react';
import { Route, withRouter } from 'react-router-dom';

class CardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.card;
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

  componentDidUpdate(prevProps, prevState) {
    debugger
    if (this.props.card !== prevProps.card) {
      this.setState({state: this.props.card});
      this.forceUpdate();
    }
  }


  render() {

    return (
      <div className="card-show-content">
        <div onClick={() => this.props.history.push(`/boards/${this.state.board_id}`)} className="close-card" href="#">
          X
        </div>
        <div className="card-show-details">
          <div className="card-header">
            <div className="card-title">
              <div className="card-header-icon">
                <i className="fas fa-pager"></i>
              </div>

              <div className="card-title-input card-title">
                <form onSubmit={e => {
                  // this.handleSubmit(e);
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
                      onClick={e => e.target.select()}
                      onBlur={e => this.handleSubmit(e)}
                      className="board-name card-title-label"
                    />
                  </h2>
                </form>
              </div>
            </div>

            <div className="card-current-list quiet">
              <p>In list&nbsp;{this.state.list_title}</p>
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
                          onClick={e => e.target.select()}
                          onBlur={e => {
                            if (e.relatedTarget && e.relatedTarget.className === "btn-cancel") {
                              this.setState({
                                description: this.props.card.description
                              })
                              // console.log('no update!');
                            } else {
                              this.handleSubmit(e);
                            }
                          }}
                          className="card-description-input"
                        />

                        <div>
                          
                        </div>
                        
                        <input 
                        type="button"
                        value="Add"
                        className="btn-description"
                        />

                        <input 
                        type="button"
                        value="X"
                        className="btn-cancel"
                        />
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

                <div className="new-comment-box">
                  <div className="member-initials"></div>
                  <div className="comment-form-container focused">
                    <div className="form">
                      <div className="textarea-input"></div>
                      <div className="comment-controls"></div>
                    </div>
                  </div>
                </div>

                <div className="comments-container">
                  <div className="comment-user"></div>
                  <div className="comment-info"></div>

                  <div className="comment"></div>

                  <div className="comment-actions"></div>
                </div>
              </div>
            </div>

            <div className="card-sidebar">
              <div className="add-to-card">
                <h3>Add To Card</h3>

                <div className="add-to-card-actions">
                  <div className="button-link due-date">
                    <a href="#">Due Date</a>
                  </div>
                </div>
              </div>

              <div className="sidebar-actions">
                <h3>Actions</h3>

                <div className="button-link move-card">
                  <div className="move-icon"></div>
                  <div>
                    <a href="#">Move</a>
                  </div>
                </div>

                <div className="button-link copy-card">
                  <div className="copy-icon"></div>
                  <div>
                    <a href="#">Copy</a>
                  </div>
                </div>

                <div className="button-link share-card">
                  <div className="share-icon"></div>
                  <div>
                    <a href="#">Share</a>
                  </div>
                </div>

                <div onClick={(e) => this.handleDelete(e)} className="button-link share-card">
                  <div className="delete-icon"></div>
                  <div className="">
                    Delete
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