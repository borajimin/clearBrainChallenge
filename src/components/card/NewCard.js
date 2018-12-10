import React, { Component } from 'react';
import './Card.css';

export class NewCard extends Component {
  render() {
    const { onChangeNewCard, onCreateCard, newCard } = this.props;
    return (
      <div className="Card">
        <input placeholder="Create a new card" onChange={onChangeNewCard} value={newCard} />
        <button onClick={onCreateCard}>+</button>
      </div>
    );
  }
}
