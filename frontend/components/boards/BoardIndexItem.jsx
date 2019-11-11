import React from 'react';

class BoardIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { board, openModal } = this.props;
        return (
            <li>
                {board.title}
                <button onClick={() => openModal('update_board')}>Update</button>
            </li>
        );
    }
}

export default BoardIndexItem;