import React, { Component } from 'react';
import { Card } from '../card/Card.js';
import { NewCard } from '../card/NewCard.js';
import './List.css';

export class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      newCard: ''
    }
    this.onDeleteCard = this.onDeleteCard.bind(this)
    this.onCreateCard = this.onCreateCard.bind(this)
    this.onChangeNewCard = this.onChangeNewCard.bind(this)
  }

  onChangeNewCard(e) {
    e.preventDefault();
    this.setState({
      newCard: e.target.value
    });
  }

  onCreateCard() {
    const { cards, newCard } = this.state;
    this.setState({
      cards: [...cards, newCard ? newCard : 'Untitled Card'],
      newCard: ''
    });
  }

  onDeleteCard(index) {
    this.setState({
      cards: this.state.cards.filter((c, i) => index !== i)
    });
  }

  render() {
    const {
      onDeleteCard,
      onCreateCard,
      onChangeNewCard,
      state: { cards, newCard },
      props: { title, onDeleteList }
    } = this;
    return (
      <div className="List">
        <div className="Header">
          <h3>{title}</h3>
          <button onClick={onDeleteList}>X</button>
        </div>
        {
          cards.map((title, i) => <Card
            key={`${title}_${i}`}
            title={title}
            onDeleteCard={() => onDeleteCard(i)}
            />)
        }
        <NewCard
          onCreateCard={onCreateCard}
          onChangeNewCard={onChangeNewCard}
          newCard={newCard}
        />
      </div>
    );
  }
}
