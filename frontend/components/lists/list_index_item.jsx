import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ListIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { list, openModal } = this.props;

        return (
            <div className="board-list-container">
                <div className="list-content-container">
                    <div className="board-list-title">
                        <h2>{
                            list.title
                        }</h2>
                    </div>
                    <div className="cards-container">
                        <div>card 1</div>
                        <div>card 2</div>
                        <div>card 3</div>
                        <div>card 4</div>
                    </div>
                </div>
            </div>




        );
    }
}

export default withRouter(ListIndexItem);