import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ListIndex from "./list_index";
import {
  requestLists,
  updateList,
  deleteList,
  removeLists
} from "../../actions/list_actions";
import {
  requestCards,
  createCard,
  removeCards
} from "../../actions/card_actions";
import { getAllLists, getAllCards } from "../../reducers/selectors";

const mSTP = (state, ownProps) => {
  let boardId = parseInt(ownProps.match.params.boardId);
  return {
    lists: getAllLists(state, boardId),
    cards: getAllCards(state, boardId)
  };
};

const mDTP = dispatch => {
  return {
    requestLists: () => dispatch(requestLists()),
    updateList: list => dispatch(updateList(list)),
    deleteList: listId => dispatch(deleteList(listId)),
    removeLists: () => dispatch(removeLists()),
    requestCards: () => dispatch(requestCards()),
    createCard: card => dispatch(createCard(card)),
    removeCards: () => dispatch(removeCards())
  };
};

export default withRouter(connect(mSTP, mDTP)(ListIndex));
