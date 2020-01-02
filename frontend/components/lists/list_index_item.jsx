import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CardIndexContainer from '../cards/card_index_container';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.list;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.blurInput = this.blurInput.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  focusInput(e) {
      e.preventDefault();
      $(`#list-title-text-${this.state.id}`);
      $(`#list-title-text-${this.state.id}`).addClass("hidden2");
      $(`#list-title-input-${this.state.id}`).removeClass("hidden2");
      $(`#list-title-input-${this.state.id}`).focus();
      $(`#list-title-input-${this.state.id}`).select();
  }
  
  blurInput(e) {
      e.preventDefault();
      $(`#list-title-input-${this.state.id}`).blur();
  }

  handleSubmit(e) {
      e.preventDefault();
      $(`#list-title-input-${this.state.id}`).addClass("hidden2");
      $(`#list-title-text-${this.state.id}`).removeClass("hidden2");
      let formData = new FormData();
      formData.append("list[id]", this.state.id);
      formData.append("list[title]", this.state.title);
      this.props.updateList(formData);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteList(this.state.id);
  }

  render() {
    // debugger
    const { list, cards } = this.props;

    return (
      <div className="board-list-container">
        <div className="list-content-container">
          <div className="board-list-title">
              <div id={`list-title-text-${list.id}`} className="list-title-text board-name">
                <div onClick={this.focusInput}>
                  {this.state.title}
                </div>
                <i onClick={this.handleDelete} className="far fa-trash-alt btn"></i>
              </div>
            <form onSubmit={this.blurInput}>
              <input
                id={`list-title-input-${list.id}`}
                type="text"
                value={this.state.title}
                onChange={this.update("title")}
                onBlur={this.handleSubmit}
                className="list-title-input board-name hidden2"
              />
            </form>
          </div>
          <CardIndexContainer list={list} cards={cards} />
        </div>
      </div>
    );
  }
}

export default ListIndexItem;