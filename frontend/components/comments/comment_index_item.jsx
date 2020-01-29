import React from "react";
import { Link, withRouter } from "react-router-dom";

const CommentIndexItem = props => {
  return (
    <div className="comment-content-container">
      <div className="comment-author">
        <div className="author-avatar">
          {props.comment.author_username[0]}
        </div>
      </div>
      <div className="comment-details-container">
        <div className="card-comment-details">
            <div className="comment-author-name">{props.comment.author_username}</div>
            <div className="comment-title">{props.comment.body}</div>
        </div>
        <div className="comment-reactions">
          <div>
            Edit &nbsp;
          </div>
          <div>
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CommentIndexItem);
