export const fetchLists = (data) => ($.ajax({
        url: `/api/lists`,
        method: 'GET',
        data
    }));

export const fetchList = listId => {
    return $.ajax({
        url: `/api/lists/${listId}`,
        method: 'GET'
    })
};

export const createList = list => {
    return $.ajax({
        url: `/api/lists`,
        method: 'POST',
        data: list,
        contentType: false,
        proccessData: false
    })
};

export const updateList = list => {
    return $.ajax({
        url: `/api/lists/${list.id}`,
        method: 'PATCH',
        data: list,
        contentType: false,
        proccessData: false
    })
};

export const deleteList = listId => {
    return $.ajax({
        url: `/api/lists/${listId}`,
        method: 'DELETE'
    })
};