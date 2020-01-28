import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CommentIndex from './comment_index';
import { requestComments } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => ({
    card: state.entities.cards[ownProps.match.params.cardId],
    comments: Object.values(state.entities.comments)
});

const mDTP = dispatch => ({
    requestComments: () => dispatch(requestComments())
});

export default withRouter(connect(mSTP, mDTP)(CommentIndex));