import React from 'react';
import { Route, withRouter } from 'react-router-dom';

class CardShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // debugger
        // this.props.requestCard(198);
    }

    render() {
        // debugger

        if (this.props.card === undefined) {
            return null;
        }

        return (
            <div className="card-show-content">
                <a href="#">X</a>
                <div className="card-show-details">

                    <div className="card-header">
                        <div className="card-header-icon">

                        </div>
                        <div className="card-title">
                            <div className="card-title-label">
                                Card title
                            </div>
                            <div className="card-title-input hidden2">

                            </div>
                        </div>
                        <div className="card-current-list">
                            <p>In list 
                                <a href="#">list name</a>
                            </p>
                        </div>
                    </div>

                    <div className="card-main">

                        <div className="card-main-desc">

                            <div className="card-desc-title">
                                <div className="card-desc-icon">

                                </div>
                                <h3>Description</h3>
                            </div>

                            <div className="card-desc-content">

                                <div className="card-desc-summary-label">

                                </div>

                                <div className="card-desc-input-container">

                                    <div className="card-desc-input">

                                    </div>

                                    <div className="edit controls">
                                        <div className="desc-save">

                                        </div>
                                        <div className="desc-cancel">

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="card-activity">
                            <div className="card-activity-title">
                                <div className="activity-icon"></div>
                                <div className="activity-title">
                                    <h3>Activity</h3>
                                </div>
                                <div className="activity-options">
                                    
                                </div>
                            </div>

                            <div className="new-comment-box">
                                <div className="member-initials"></div>
                                <div className="comment-form-container focused">
                                    <div className="form">
                                        <div className="textarea-input"></div>
                                        <div className="comment-controls">

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="comments-container">
                                <div className="comment-user"></div>
                                <div className="comment-info"></div>

                                <div className="comment">

                                </div>

                                <div className="comment-actions"></div>
                            </div>
                        </div>

                    </div>

                    <div className="card-sidebar">

                        <div className="add-to-card">
                            <h3>Add To Card</h3>
                            <div className="add-to-card-actions">
                                <div className="due-date">
                                    <a href="#">Due Date</a>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-actions">
                            <h3>Actions</h3>

                            <div className="move-card">
                                <div className="move-icon"></div>
                                <div><a href="#">Move</a></div>
                            </div>

                            <div className="copy-card">
                                <div className="copy-icon"></div>
                                <div><a href="#">Copy</a></div>
                            </div>

                            <div className="share-card">
                                <div className="share-icon"></div>
                                <div><a href="#">Share</a></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default CardShow;