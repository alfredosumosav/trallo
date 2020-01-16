// Return the states boards as an array of boards
export const getAllBoards = (state) => (
    Object.keys(state.entities.boards).map(id => state.entities.boards[id])
);

// Select individual board
export const selectBoards = (state, id) => {
    const nullBoard = {
        id: null,
        title: "",
        favorited: false,
        archived: false,
        author_id: Object.keys(state.users).last
    };

    return state.entities.boards[id] || nullBoard;
};