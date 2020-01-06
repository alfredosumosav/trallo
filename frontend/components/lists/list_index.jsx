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
        // debugger
        this.props.requestCards(this.props.match.params);
    };

    componentWillUnmount() {
        this.props.removeLists();
        this.props.removeCards();
    };

    render() {
        // cards.filter(card => card.list_id === list.id)

        if (this.props.lists === undefined || this.props.cards === undefined) {
            return null;
        }
        // debugger

        const { lists, cards } = this.props;
        // debugger
        return (
                    lists.map((list, id) => <ListIndexItem key={id} list={list} cards={cards} updateList={this.props.updateList} deleteList={this.props.deleteList} createCard={this.props.createCard} />)
        );
    }
}

export default withRouter(ListIndex);