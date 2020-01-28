import {
    RECEIVE_COMMENTS,
    RECEIVE_COMMENT,
    REMOVE_COMMENT,
    REMOVE_COMMENTS
} from '../actions/comment_actions';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_COMMENTS:
            return action.comments;
        case RECEIVE_COMMENT:
            let comment = Object.values(action.comment)[0]
            nextState[comment.id] = comment;
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.commentId];
            return nextState;
        case REMOVE_COMMENTS:
            return {};
        default:
            return oldState;
    }
};

export default commentsReducer;