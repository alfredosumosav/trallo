import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CardIndexContainer from '../cards/card_index_container';

class ListIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.list;
    this.state.card_title = '';
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.focusInput = this.focusInput.bind(this);
    this.blurInput = this.blurInput.bind(this);
    this.handleNewCard = this.handleNewCard.bind(this);
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

  handleNewCard(e) {
    e.preventDefault();

    if (e.target.value !== '') {
      let cardFormData = new FormData();
      cardFormData.append('card[title]', this.state.card_title);
      cardFormData.append('card[list_id]', this.state.id);
      this.props.createCard(cardFormData).then(() => {
        this.setState({
          card_title: ''
        });
  
        document.getElementById(`card-input-${this.state.id}`).classList.add('hidden2');
        document.getElementById(`card-actions-container-${this.state.id}`).classList.add("hidden2");
        document.getElementById(`card-text-${this.state.id}`).classList.remove('hidden2');
        document.getElementById(`container-${this.state.id}`).classList.add('card-text')
      });
    }
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
          <div className="list-cards-container">
            <CardIndexContainer list={list} cards={cards} />
            <div id={`container-${this.state.id}`} className="cards-content-container card-text card-input-container">
              <div className="list-card-details card-input-container">
                <div 
                  id={`card-text-${this.state.id}`}
                  onClick={e => {
                    e.currentTarget.classList.add("hidden2");
                    document.getElementById(`container-${this.state.id}`).classList.remove('card-text')
                    document.getElementById(`card-input-${this.state.id}`).classList.remove("hidden2");
                    document.getElementById(`card-input2-${this.state.id}`).classList.remove("hidden2");
                    document.getElementById(`card-actions-container-${this.state.id}`).classList.remove("hidden2");
                    document.getElementById(`card-input-${this.state.id}`).select();
                  }}>
                  <i className="fas fa-plus"></i> Add a card
                </div>
                <form
                  id={`card-f-${this.state.id}`}
                  onSubmit={e => this.handleNewCard(e)}
                  className="card-form-container">
                    <input 
                      id={`card-input-${this.state.id}`}
                      type="text"
                      value={this.state.card_title}
                      autoComplete="off"
                      placeholder="Enter card title..."
                      onChange={this.update("card_title")}
                      onBlur={this.handleNewCard}
                      className="card-input hidden2"/>
                    <div id={`card-actions-container-${this.state.id}`} className="card-actions hidden2">
                      <div 
                        id={`submit-card-input-${this.state.id}`} 
                        className="btn-success submit-card-input">
                          Add Card
                      </div>
                      <div
                        id={`card-input2-${this.state.id}`}
                        className="card-input2 hidden2 board-name"
                        onClick={e => {
                          this.setState({
                            card_title: ""
                          });
                          document.getElementById(`card-input-${this.state.id}`).classList.add('hidden2');
                          document.getElementById(`card-input2-${this.state.id}`).classList.add("hidden2");
                          document.getElementById(`card-actions-container-${this.state.id}`).classList.add("hidden2");
                          document.getElementById(`card-text-${this.state.id}`).classList.remove('hidden2');
                          document.getElementById(`container-${this.state.id}`).classList.add('card-text')
                        }}>
                        <div className="btn">
                          <i className="fas fa-times"></i>
                        </div>
                      </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListIndexItem;