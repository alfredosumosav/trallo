import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CommentIndex from "./comment_index";
import {
  requestComments,
  updateComment,
  deleteComment
} from "../../actions/comment_actions";

const mSTP = (state, ownProps) => ({
  card: state.entities.cards[ownProps.match.params.cardId],
  comments: Object.values(state.entities.comments)
});

const mDTP = dispatch => ({
  requestComments: () => dispatch(requestComments()),
  updateComment: comment => dispatch(updateComment(comment)),
  deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default withRouter(connect(mSTP, mDTP)(CommentIndex));
