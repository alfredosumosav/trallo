import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { board, openModal } = this.props;
        return (
                <div className="list-container">
                    <Link to={`/boards/${board.id}`} className="item-link" >
                        <div className="overlay">
                        </div>
                            {board.title}
                    </Link>                    
                </div>




        );
    }
}

export default BoardIndexItem;