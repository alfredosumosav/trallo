import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import ListIndexItem from '../lists/list_index_item';

class ListIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.requestLists(this.props.match.params);
    };

    componentWillUnmount() {
        this.props.removeLists();
    };

    render() {

        if (this.props.lists === undefined) {
            return null;
        }

        const { lists } = this.props;
        return (
                    lists.map((list, id) => <ListIndexItem key={id} list={list} updateList={this.props.updateList} deleteList={this.props.deleteList} />)
        );
    }
}

export default withRouter(ListIndex);