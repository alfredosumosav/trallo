import React from 'react';

class BoardShow extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        debugger
        this.props.requestBoard(this.props.match.params.boardId);
    }

    render() {
        if (this.props.board === undefined) {
         return null;   
        }
        // const { board } = this.props;
        return (
            <div className="board-show-container">
                <div className="row">
                    <div className="board-title">
                        <p>{this.props.board.title}</p>
                    </div>
                    <div className="trash-can">
                        <i class="far fa-trash-alt"></i>
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