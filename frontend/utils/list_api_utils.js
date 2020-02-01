export const fetchLists = data =>
  $.ajax({
    url: `/api/lists`,
    method: "GET",
    data
  });

export const fetchList = listId => {
  return $.ajax({
    url: `/api/lists/${listId}`,
    method: "GET"
  });
};

export const createList = list => {
  return $.ajax({
    url: `/api/lists`,
    method: "POST",
    data: list,
    processData: false,
    contentType: false
  });
};

export const updateList = list => {
  return $.ajax({
    url: `/api/lists/${list.getAll("list[id]")}`,
    method: "PATCH",
    data: list,
    processData: false,
    contentType: false
  });
};

export const deleteList = listId => {
  return $.ajax({
    url: `/api/lists/${listId}`,
    method: "DELETE",
    processData: false,
    contentType: false
  });
};
