import React from 'react';
import BoardIndexItem from './boards_index_item';
import { Link } from 'react-router-dom';

class BoardIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.requestBoards();
        this.props.requestLists();
    }

    show(e) {
        document.getElementById('archived').classList.toggle('show');
    }

    render() {
        let show = '';
        const { boards, openModal } = this.props;
        return (
            <div className="boards-container">
                <div className="boards-index">
                    <div className="boards-header-name">
                        <span><i className='far fa-star i'></i>Starred Boards!</span>
                    </div>
                    <div className="boards-list">
                        {
                            boards.filter(board => !board.archived).filter(board => board.favorited).map(board => (
                                <BoardIndexItem openModal={openModal} key={board.id} board={board} />
                            ))
                        }
                    </div>
                    <div className="boards-header-name">
                        <span><i className="far fa-user i"></i>Personal Boards!</span>
                    </div>
                    <div className="boards-list">
                        {
                            boards.filter(board => !board.archived).map(board => (
                                <BoardIndexItem openModal={openModal} key={board.id} board={board} />
                            ))
                        }
                        <div className="list-container">
                            <Link to="#" id="new-b" onClick={() => this.props.openModal('create_board')} className="item-link">
                                <div className="overlay">
                                </div>
                                <div className="b-title">
                                    Create new board
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="boards-header-name">
                        <span className="archived-title" onClick={this.show}><i className='fas fa-archive i'></i>Archived Boards!&nbsp;<i className={`fas fa-angle-double-down i i-carot`}></i></span>
                    </div>
                    <div id="archived" className="boards-list archived">
                        {
                            boards.filter(board => board.archived).map(board => (
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