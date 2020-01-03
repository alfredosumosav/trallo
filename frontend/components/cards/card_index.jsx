import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import CardIndexItem from './card_index_item';

class CardIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        // this.props.requestCards(this.props.match.params);
    };

    // componentWillUnmount() {
    //     this.props.removeCards();
    // };

    render() {

        if (this.props.cards === undefined || this.props.list === undefined) {
            return null;
        }

        const { cards, list } = this.props;
        // debugger
        return (
            cards.filter(card => card.list_id === list.id).map((card, id) => <CardIndexItem key={id} card={card} />)
        );
    }
}

export default withRouter(CardIndex);