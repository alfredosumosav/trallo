export const fetchBoards = () => (
    $.ajax({
        url: `/api/boards`,
        method: 'GET'
    })
);

export const fetchBoard = boardId => (
    $.ajax({
        url: `/api/boards/${boardId}`,
        method: 'GET'
    })
);

export const createBoard = board => (
    $.ajax({
        url: `/api/boards`,
        method: 'POST',
        data: { board }
    })
);

export const updateBoard = board => (
    $.ajax({
        url: `/api/boards/${board.id}`,
        method: 'PATCH',
        data: { board }
    })
);

export const deleteBoard = boardId => (
    $.ajax({
        url: `/api/boards/${boardId}`,
        method: 'DELETE'
    })
);
