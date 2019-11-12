import React from 'react';

class BoardShow extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const { board, boardAuthor } = this.props;
        return (
            <div className="board-show-container">
                <div className="row">
                    <div className="board-title">
                        <p>{board.title}</p>
                        <div className="member-list">
                            <div>{boardAuthor.username}</div>
                            <div>Another member</div>
                        </div>
                    </div>
                </div>
                <div className="list-container">
                    <h1>List 1</h1>
                    <h1>List 2</h1>
                    <h1>List 3</h1>
                    <h1>List 4</h1>
                </div>
            </div>
        );
    }
}

export default BoardShow;