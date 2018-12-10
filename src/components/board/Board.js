import React, { Component } from 'react';
import { List } from '../list/List.js';
import { NewList } from '../list/NewList.js';
import './Board.css';

export class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      newList: ''
    }
    this.onDeleteList = this.onDeleteList.bind(this)
    this.onCreateList = this.onCreateList.bind(this)
    this.onChangeNewList = this.onChangeNewList.bind(this)
  }

  onChangeNewList(e) {
    e.preventDefault();
    this.setState({
      newList: e.target.value
    });
  }

  onCreateList() {
    const { lists, newList } = this.state;
    this.setState({
      lists: [...lists, newList ? newList : 'Untitled List'],
      newList: ''
    });
  }

  onDeleteList(index) {
    this.setState({
      lists: this.state.lists.filter((c, i) => index !== i)
    });
  }

  render() {
    const {
      onDeleteList,
      onChangeNewList,
      onCreateList,
      state: { lists, newList }
    } = this;

    return (
      <div className="Board">
        {
          lists.map((title, i) => <List
            key={`${title}_${i}`}
            title={title}
            onDeleteList={() => onDeleteList(i)}
            />)
        }
        <NewList
          onCreateList={onCreateList}
          onChangeNewList={onChangeNewList}
          newList={newList}
        />
      </div>
    );
  }
}
