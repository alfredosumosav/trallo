import React from 'react';
import { Link } from 'react-router-dom';

const CardIndexItem = (props) => {
    return (
        <div className="cards-content-container">
            <div className="list-card-details">
                <Link to={`/cards/${props.card.id}`} >
                    <div className="c-title">
                        {props.card.title}
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default CardIndexItem;