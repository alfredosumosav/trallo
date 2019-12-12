import {
    RECEIVE_LISTS,
    RECEIVE_LIST,
    REMOVE_LIST
} from '../actions/list_actions';

const listsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_LISTS:
            // debugger
            return action.lists;
        case RECEIVE_LIST:
            //debugger?
            let list = Object.values(action.list)[0]
            nextState[list.id] = list;
            return nextState;
        case REMOVE_LIST:
            delete nextState[action.listId];
            return nextState;
        default:
            return oldState;
    }
};

export default listsReducer;