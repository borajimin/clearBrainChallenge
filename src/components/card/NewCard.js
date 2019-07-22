import React, { Component } from 'react';
import './Card.css';

export class NewCard extends Component {
  render() {
    const { onChangeNewCard, onCreateCard, newCard } = this.props;
    return (
      <div className="Card">
        <input className="CreateInput" placeholder="Create a new card" onChange={onChangeNewCard} value={newCard} />
        <button className="CreateButton" onClick={onCreateCard}>+</button>
      </div>
    );
  }
}
