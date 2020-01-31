import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import ListIndexItem from '../lists/list_index_item';

class ListIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        this.props.requestLists();
        this.props.requestCards();
    };

    render() {

        const { lists, cards } = this.props;
        // debugger

        return (
                    lists.map((list) => <ListIndexItem key={list.id} list={list} cards={cards} updateList={this.props.updateList} deleteList={this.props.deleteList} createCard={this.props.createCard} />)
        );
    }
}

export default ListIndex;