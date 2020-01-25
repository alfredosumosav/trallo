import React from "react";
import { withRouter } from "react-router-dom";
import CommentIndexItem from "./comment_index_item";

const CommentIndex = props => {
  if (props.comments.length === 0) {
    return null;
  }

  return props.comments
    .filter(comment => comment.card_id === props.card.id)
    .map((comment, id) => <CommentIndexItem key={id} comment={comment} />);
};

export default withRouter(CommentIndex);
