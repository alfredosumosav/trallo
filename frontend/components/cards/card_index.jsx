import React from "react";
import { withRouter } from "react-router-dom";
import CardIndexItem from "./card_index_item";

const CardIndex = props => {
  if (props.cards.length === 0 || props.list.length === 0) {
    return null;
  }

  return props.cards
    .filter(card => card.list_id === props.list.id)
    .map((card, id) => <CardIndexItem key={id} card={card} />);
};

export default withRouter(CardIndex);
