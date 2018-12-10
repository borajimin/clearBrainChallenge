import React, { Component } from 'react';
import './Card.css';

export class Card extends Component {
  render() {
    const { title, onDeleteCard } = this.props;
    return (
      <div className="Card">
        {title}
        <button onClick={onDeleteCard}>X</button>
      </div>
    );
  }
}
