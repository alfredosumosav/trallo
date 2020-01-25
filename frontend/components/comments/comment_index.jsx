import React from "react";
import { withRouter } from "react-router-dom";
import CommentIndexItem from "./comment_index_item";

const CommentIndex = props => {
    // debugger
  if (props.card.comments.length === 0) {
    return null;
  }

  return props.card.comments
    .map((comment, id) => <CommentIndexItem key={id} comment={comment} />);
};

export default withRouter(CommentIndex);
