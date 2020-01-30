import React from 'react';
import CardIndex from '../cards/card_index';

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

    let cardFormData = new FormData();
    cardFormData.append('card[title]', this.state.card_title);
    cardFormData.append('card[list_id]', this.state.id);

    this.props.createCard(cardFormData).then(e => {

      this.setState({
        card_title: ''
      }, (e) => {
        document.getElementById(`card-input-${this.state.id}`).focus();
        // scroll to form for easier exp
        document.getElementById(`card-f-${this.state.id}`).scrollIntoView(false);
        return null;
      });

    }).fail(e => {
      document.getElementById(`card-f-${this.state.id}`).classList.add('hidden2');
      document.getElementById(`card-text-${this.state.id}`).classList.remove('hidden2');
      return null;
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteList(this.state.id);
  }

  render() {
    const { list, cards } = this.props;

    return (
      <div className="board-list-container">
        <div className="list-content-container">
          <div onMouseEnter={() => $(`#delete-${this.state.id}`).removeClass('hidden2')} onMouseLeave={() => $(`#delete-${this.state.id}`).addClass('hidden2')} className="board-list-title">
              <div id={`list-title-text-${list.id}`} className="list-title-text board-name">
                <div onClick={this.focusInput}>
                  {this.state.title}
                </div>
                <i id={`delete-${this.state.id}`} onClick={this.handleDelete} className="far fa-trash-alt btn hidden2"></i>
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
            <CardIndex list={list} cards={cards} />

              <div 
                id={`card-text-${this.state.id}`}
                onClick={e => {
                  document.getElementById(`card-text-${this.state.id}`).classList.add('hidden2');
                  document.getElementById(`card-f-${this.state.id}`).classList.remove('hidden2');
                  document.getElementById(`card-input-${this.state.id}`).focus();
                }}
                className="list-card-details cards-content-container card-text card-input-container"
              >
                  <i className="fas fa-plus"></i> Add a card
              </div>
            
            <div className="c-form-container">

              <form
                id={`card-f-${this.state.id}`}
                onSubmit={e => this.handleNewCard(e)}
                className="card-form-container hidden2"
                >
                  <input 
                    id={`card-input-${this.state.id}`}
                    type="text"
                    value={this.state.card_title}
                    autoComplete="off"
                    placeholder="Enter card title..."
                    onChange={this.update("card_title")}
                    onBlur={e => {

                      if ((e.relatedTarget !== null) && (e.relatedTarget.value === 'X')) {
                        document.getElementById(`card-f-${this.state.id}`).classList.add('hidden2');
                        document.getElementById(`card-text-${this.state.id}`).classList.remove('hidden2');
                        this.setState({
                          card_title: ''
                        }, e => null);
                      } else if (e.relatedTarget === null || e.relatedTarget || e.relatedTarget.value !== 'X') {
                        return this.handleNewCard(e);
                      }

                      return null;
                    }}
                    className="card-input"
                  />

                  <div id={`card-actions-container-${this.state.id}`} className="card-actions">

                    <div 
                      id={`submit-card-input-${this.state.id}`} 
                      className="btn-success submit-card-input"
                      >
                        Add Card
                    </div>

                    <input
                      type="button"
                      value="X"
                      onClick={(e) => {
                        this.setState({
                          card_title: ''
                        }, (e) => {
                          document.getElementById(`card-f-${this.state.id}`).classList.add('hidden2');
                          document.getElementById(`card-text-${this.state.id}`).classList.remove('hidden2');
                        });
                      }}
                      className="btn-cancel"
                    />

                  </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListIndexItem;