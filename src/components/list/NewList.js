import React, { Component } from 'react';
import './List.css';

export class NewList extends Component {
  render() {
    const { onChangeNewList, onCreateList, newList } = this.props;
    return (
      <div className="List">
        <input
          value={newList}
          placeholder="Create a new list"
          onChange={onChangeNewList}
          className="CreateInput"
        />
        <button className="CreateButton" onClick={onCreateList}>+</button>
      </div>
    );
  }
}
