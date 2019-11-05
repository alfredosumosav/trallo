import {
    RECEIVE_CURRENT_USER
} from "../actions/session_actions";

const usersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            let u = Object.values(action.user)[0]
            nextState[u.id] = u;
            return nextState;
        default:
            return oldState;
    }
};

export default usersReducer;