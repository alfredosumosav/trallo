export const fetchCards = (data) => {
    // debugger
    return $.ajax({
        url: `/api/cards`,
        method: 'GET',
        data
    });
};

export const fetchCard = (cardId) => {
    debugger
    return $.ajax({
        url: `/api/cards/${cardId}`,
        method: 'GET'
    });
};

export const createCard = card => {
    return $.ajax({
        url: `/api/cards`,
        method: 'POST',
        data: card,
        processData: false,
        contentType: false
    });
};

// export const updateCard = card => {
//     return $.ajax({
//         url: `/api/cards/${card.getAll('card[id]')}`,
//         method: 'PATCH',
//         data: card,
//         processData: false,
//         contentType: false
//     });
// };

// export const deleteCard = cardId => {
//     return $.ajax({
//         url: `/api/cards/${cardId}`,
//         method: 'DELETE',
//         processData: false,
//         contentType: false
//     });
// };


// ---

// export const fetchLists = (data) => ($.ajax({
//     url: `/api/lists`,
//     method: 'GET',
//     data
// }));

// export const fetchList = listId => {
//     return $.ajax({
//         url: `/api/lists/${listId}`,
//         method: 'GET'
//     })
// };

// export const createList = list => {
//     return $.ajax({
//         url: `/api/lists`,
//         method: 'POST',
//         data: list,
//         processData: false,
//         contentType: false,
//     })
// };

// // EXAMPLE
// // $.ajax({
// //     url: `/api/lists`,
// //     method: 'POST',
// //     data: { list: { title: "hola", board_id: 87, author_id: 10 } },
// //     contentType: false,
// //     proccessData: false
// // })

// // export const updateList = list => {
// //     return $.ajax({
// //         url: `/api/lists/${list.id}`,
// //         method: 'PATCH',
// //         data: list,
// //         contentType: false,
// //         proccessData: false
// //     })
// // };

// export const updateList = list => {
//     return $.ajax({
//         url: `/api/lists/${list.getAll('list[id]')}`,
//         method: "PATCH",
//         data: list,
//         processData: false,
//         contentType: false
//     });
// };

// export const deleteList = listId => {
//     // debugger
//     return $.ajax({
//         url: `/api/lists/${listId}`,
//         method: "DELETE",
//         processData: false,
//         contentType: false
//     });
// };