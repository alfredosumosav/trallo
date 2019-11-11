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
        return (
            <div>Hello from Board index</div>
        );
    }
}

export default BoardIndex;