import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import ListIndexItem from '../lists/list_index_item';

class ListIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        debugger
        this.props.requestLists();
        this.props.requestCards();
    };

    componentWillUnmount() {
        // this.props.removeLists();
        // this.props.removeCards();
    };

    render() {

        if (this.props.lists === undefined || this.props.cards === undefined) {
            return null;
        }

        const { lists, cards } = this.props;
        debugger

        return (
                    lists.filter(list => list.board_id === parseInt(this.props.match.params.boardId)).map((list, id) => <ListIndexItem key={id} list={list} cards={cards.filter(card => card.list_id === list.id)} updateList={this.props.updateList} deleteList={this.props.deleteList} createCard={this.props.createCard} />)
        );
    }
}

export default withRouter(ListIndex);