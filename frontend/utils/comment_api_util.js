export const fetchComments = () => {
    return $.ajax({
        url: `/api/comments`,
        method: 'GET'
    });
};

export const fetchComment = (commentId) => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'GET'
    });
};

export const createComment = comment => {
    return $.ajax({
        url: `/api/comments`,
        method: 'POST',
        data: comment,
        processData: false,
        contentType: false
    });
};

export const updateComment = comment => {
    return $.ajax({
        url: `/api/comments/${comment.getAll('comment[id]')}`,
        method: 'PATCH',
        data: comment,
        processData: false,
        contentType: false
    });
};

export const deleteComment = commentId => {
    return $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'DELETE',
        processData: false,
        contentType: false
    });
};