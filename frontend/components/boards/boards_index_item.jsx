import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { board, openModal } = this.props;
        return (
            <div className="boards-item-container">
                <div className="boards-item">
                    <Link to={`/boards/${board.id}`} className="item-link" >
                        {board.title}
                    </Link>
                </div>
            </div>
        );
    }
}

export default BoardIndexItem;