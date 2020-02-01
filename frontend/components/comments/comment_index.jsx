import React from "react";
import { withRouter } from "react-router-dom";
import CommentIndexItem from "./comment_index_item";

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestComments();
  }

  render() {
    if (this.props.comments === undefined) {
      return null;
    }

    return (
      <div>
        {this.props.comments
          .filter(comment => comment.card_id === this.props.card.id)
          .sort((a, b) => b.id - a.id)
          .map(comment => (
            <CommentIndexItem
              key={comment.id}
              comment={comment}
              updateComment={this.props.updateComment}
              deleteComment={this.props.deleteComment}
            />
          ))}
      </div>
    );
  }
}

export default withRouter(CommentIndex);
