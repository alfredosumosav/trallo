import * as CommentAPIUtil from "../utils/comment_api_util";

export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const REMOVE_COMMENTS = "REMOVE_COMMENTS";
// export const REMOVE_ERRORS = 'REMOVE_ERRORS';

const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const receiveCommentErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

const removeComment = commentId => ({
  type: REMOVE_COMMENT,
  commentId
});

export const removeComments = () => ({
  type: REMOVE_COMMENTS
});

export const requestComments = () => dispatch => {
  return CommentAPIUtil.fetchComments()
    .then(comments => dispatch(receiveComments(comments)))
    .fail(errors => dispatch(receiveCommentErrors(errors)));
};

export const requestComment = commentId => dispatch => {
  return CommentAPIUtil.fetchComment(commentId)
    .then(comment => dispatch(receiveComment(comment)))
    .fail(errors => dispatch(receiveCommentErrors(errors)));
};

export const createComment = comment => dispatch => {
  return CommentAPIUtil.createComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
    .fail(errors => dispatch(receiveCommentErrors(errors)));
};

export const updateComment = comment => dispatch => {
  return CommentAPIUtil.updateComment(comment)
    .then(comment => dispatch(receiveComment(comment)))
    .fail(errors => dispatch(receiveCommentErrors(errors)));
};

export const deleteComment = commentId => dispatch => {
  return CommentAPIUtil.deleteComment(commentId)
    .then(() => dispatch(removeComment(commentId)))
    .fail(errors => dispatch(receiveCommentErrors(errors)));
};
