import React from "react";
import { Link, withRouter } from "react-router-dom";

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.comment;
    this.handleComment = this.handleComment.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleComment(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("comment[id]", this.state.id);
    formData.append("comment[body]", this.state.body);
    this.props.updateComment(formData).then(() => {
      document
        .getElementById(`comment-input-${this.state.id}`)
        .classList.add("hidden2");
      document
        .getElementById(`comment-title-${this.state.id}`)
        .classList.remove("hidden2");
      document
        .getElementById(`comment-reactions-${this.state.id}`)
        .classList.remove("hidden2");
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteComment(this.state.id);
  }

  render() {
    return (
      <div className="comment-content-container">
        <div className="comment-author">
          <div className="author-avatar">
            {this.props.comment.author_username[0]}
          </div>
        </div>
        <div className="comment-details-container">
          <div className="card-comment-details">
            <div className="comment-label">
              <div className="comment-author-name">
                {this.props.comment.author_username}
              </div>
              <div
                id={`comment-title-${this.state.id}`}
                className="comment-title"
              >
                {this.props.comment.body}
              </div>
            </div>
            <div
              id={`comment-input-${this.state.id}`}
              className="comment-input hidden2"
            >
              <form>
                <textarea
                  className="comment-title ctf"
                  value={this.state.body}
                  onChange={this.update("body")}
                />

                <div className="comment-action-cont">
                  <input
                    type="button"
                    value="Save"
                    onClick={e => {
                      this.handleComment(e);
                    }}
                    className="btn-description btn-success btn-save"
                  />
                  <input
                    type="button"
                    value="X"
                    onClick={e => {
                      document
                        .getElementById(`comment-input-${this.state.id}`)
                        .classList.add("hidden2");
                      document
                        .getElementById(`comment-title-${this.state.id}`)
                        .classList.remove("hidden2");
                      document
                        .getElementById(`comment-reactions-${this.state.id}`)
                        .classList.remove("hidden2");
                      this.setState({
                        body: this.props.comment.body
                      });
                    }}
                    className="btn-cancel"
                  />
                </div>
              </form>
            </div>
          </div>
          <div
            id={`comment-reactions-${this.state.id}`}
            className="comment-reactions quiet"
          >
            <div
              onClick={e => {
                document
                  .getElementById(`comment-title-${this.state.id}`)
                  .classList.add("hidden2");
                document
                  .getElementById(`comment-reactions-${this.state.id}`)
                  .classList.add("hidden2");
                document
                  .getElementById(`comment-input-${this.state.id}`)
                  .classList.remove("hidden2");
              }}
            >
              Edit
            </div>
            &nbsp;
            <div onClick={this.handleDelete}>Delete</div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CommentIndexItem);
