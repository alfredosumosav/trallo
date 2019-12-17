import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import ListIndexItem from '../lists/list_index_item';

class ListIndex extends React.Component {
    constructor() {
        super(props);
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
    }
}

export default ListIndex;