import * as ListAPIUtil from "../utils/list_api_utils";

export const RECEIVE_LISTS = "RECEIVE_LISTS";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";
export const REMOVE_LIST = "REMOVE_LIST";
export const REMOVE_LISTS = "REMOVE_LISTS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

const receiveLists = lists => ({
  type: RECEIVE_LISTS,
  lists
});

const receiveList = list => ({
  type: RECEIVE_LIST,
  list
});

const removeList = listId => ({
  type: REMOVE_LIST,
  listId
});

const receiveListErrors = errors => ({
  type: RECEIVE_LIST_ERRORS,
  errors
});

export const removeLists = () => ({
  type: REMOVE_LISTS
});

export const removeErrors = () => ({
  type: REMOVE_ERRORS
});

export const requestLists = () => dispatch => {
  return ListAPIUtil.fetchLists()
    .then(lists => dispatch(receiveLists(lists)))
    .fail(errors => dispatch(receiveListErrors(errors)));
};

export const requestList = listId => dispatch => {
  return ListAPIUtil.fetchList(listId)
    .then(list => dispatch(receiveList(list)))
    .fail(errors => dispatch(receiveListErrors(errors)));
};

export const createList = list => dispatch => {
  return ListAPIUtil.createList(list)
    .then(list => dispatch(receiveList(list)))
    .fail(errors => dispatch(receiveListErrors(errors)));
};

export const updateList = list => dispatch => {
  return ListAPIUtil.updateList(list)
    .then(list => dispatch(receiveList(list)))
    .fail(errors => dispatch(receiveListErrors(errors)));
};

export const deleteList = listId => dispatch => {
  return ListAPIUtil.deleteList(listId)
    .then(() => dispatch(removeList(listId)))
    .fail(errors => dispatch(receiveListErrors(errors)));
};
