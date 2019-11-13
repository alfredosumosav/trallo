import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { board, openModal } = this.props;
        let img;

        if(board.photoUrl){
            img = <img src={board.photoUrl} className="bbg"></img>    
            let s = "s"
        }else{
            img = ""
        }

        return (
                <div className="list-container">
                    <Link to={`/boards/${board.id}`} className="item-link" >
                        <div className="overlay">
                        </div>
                        {img}
                        <div className="b-title">
                            {board.title}
                        </div>
                    </Link>                    
                </div>




        );
    }
}

export default BoardIndexItem;

// {
//     (board.photoUrl === true) ? (<img src={board.photoUrl}></img>) : ""
// }