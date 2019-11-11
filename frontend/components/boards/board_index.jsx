import React from 'react';
import BoardIndexItem from './BoardIndexItem';

class BoardIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestBoards();
    }

    render() {
        const { boards, openModal } = this.props;
        return (
            <div className="boards-container">
                <ul>
                    {
                        boards.map(board => (
                            <BoardIndexItem openModal={openModal} key={board.id} board={board} />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default BoardIndex;