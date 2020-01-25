import React from "react";
import { Link, withRouter } from "react-router-dom";

const CommentIndexItem = props => {
  return (
    <div className="comment-content-container">
      <div className="card-comment-details">
          <div className="comment-author">{props.comment.author_username}</div>
          <div className="comment-title">{props.comment.body}</div>
      </div>
    </div>
  );
};

export default withRouter(CommentIndexItem);
