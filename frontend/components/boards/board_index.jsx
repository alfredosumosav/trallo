import React from 'react';
import BoardIndexItem from './boards_index_item';

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
                <div className="boards-index">
                    <div className="boards-header-name">
                        <span>Your Boards!</span>
                    </div>
                    <div className="boards-list">
                        {
                            boards.map(board => (
                                <BoardIndexItem openModal={openModal} key={board.id} board={board} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardIndex;