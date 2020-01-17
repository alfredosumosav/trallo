import React from 'react';
import { Route, withRouter } from 'react-router-dom';

class CardShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.card;
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props.list !== prevProps.list) {
  //     // debugger;
  //   }
  // }

  // componentWillUnmount() {
  //   this.props.removeCard(this.state.id);
  // }

  render() {
    // debugger;

    return (
      <div className="card-show-content">
        <a className="close-card" href="#">
          X
        </a>
        <div className="card-show-details">
          <div className="card-header">
            <div className="card-title">
              <div className="card-header-icon">
                <i className="fas fa-pager"></i>
              </div>

              <div className="card-title-label">
                <h2>{this.state.title}</h2>
              </div>

              <div className="card-title-input hidden2"></div>
            </div>

            <div className="card-current-list quiet">
              <p>In list&nbsp;{this.state.list_title}</p>
            </div>
          </div>

          <div className="card-main-container">
            <div className="card-main">
              <div className="card-main-desc">
                <div className="card-desc-title">
                  <div className="card-desc-icon">
                    <i className="fas fa-align-left"></i>
                  </div>

                  <h3>Description</h3>
                </div>

                <div className="card-desc-content">
                  <div className="card-desc-summary-label">
                    {this.state.description}
                  </div>

                  <div className="card-desc-input-container">
                    <div className="card-desc-input"></div>

                    <div className="edit controls">
                      <div className="desc-save"></div>
                      <div className="desc-cancel"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-activity">
                <div className="card-activity-title">
                  <div className="activity-icon">
                    <i className="fas fa-list-ul"></i>
                  </div>
                  <div className="activity-title">
                    <h3>Activity</h3>
                  </div>
                  <div className="activity-options"></div>
                </div>

                <div className="new-comment-box">
                  <div className="member-initials"></div>
                  <div className="comment-form-container focused">
                    <div className="form">
                      <div className="textarea-input"></div>
                      <div className="comment-controls"></div>
                    </div>
                  </div>
                </div>

                <div className="comments-container">
                  <div className="comment-user"></div>
                  <div className="comment-info"></div>

                  <div className="comment"></div>

                  <div className="comment-actions"></div>
                </div>
              </div>
            </div>

            <div className="card-sidebar">
              <div className="add-to-card">
                <h3>Add To Card</h3>

                <div className="add-to-card-actions">
                  <div className="button-link due-date">
                    <a href="#">Due Date</a>
                  </div>
                </div>
              </div>

              <div className="sidebar-actions">
                <h3>Actions</h3>

                <div className="button-link move-card">
                  <div className="move-icon"></div>
                  <div>
                    <a href="#">Move</a>
                  </div>
                </div>

                <div className="button-link copy-card">
                  <div className="copy-icon"></div>
                  <div>
                    <a href="#">Copy</a>
                  </div>
                </div>

                <div className="button-link share-card">
                  <div className="share-icon"></div>
                  <div>
                    <a href="#">Share</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CardShow);