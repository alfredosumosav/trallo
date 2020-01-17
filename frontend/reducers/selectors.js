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

// Select individual list
export const selectLists = (state, card) => {
    const nullList = {
        id: null,
        title: "",
        board_id: null
    };

    return state.entities.lists[card.list_id] || nullBoard;
};

// Select individual card
export const selectCards = (state, id) => {
    const nullCard = {
        id: null,
        title: "",
        description: null,
        due_date: null,
        list_id: null
    };

    return state.entities.cards[id] || nullCard
};