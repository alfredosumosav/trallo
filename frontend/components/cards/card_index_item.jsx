import React from "react";
import { Link, withRouter } from "react-router-dom";

const CardIndexItem = props => {
  return (
    <div className="cards-content-container">
      <div className="list-card-details">
        <Link to={`/boards/${props.card.board_id}/cards/${props.card.id}`}>
          <div className="c-title">{props.card.title}</div>
        </Link>
      </div>
    </div>
  );
};

export default withRouter(CardIndexItem);
