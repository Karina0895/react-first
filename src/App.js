import React, { Component } from 'react'
import List from './List'


export default class App extends Component {

  state = {
    count: 4, 
    title: 'sdfasdf',
    array: [
        {
            id: 0,
            model: 'Mazda',
            color: 'red',
        },
        {
            id: 1,
            model: 'Toyota',
            color: 'red',
        },
        {
            id: 2,
            model: 'WV',
            color: 'blue',
        },
        {
            id: 3,
            model: 'Mercedes',
            color: 'red',
        },
    ]
  };

  onAddBtnClick() {
    const { state: { array } } = this;
    const lastElement = array[array.length-1];
    this.setState({
      array: [
        ...this.state.array,
        {
          id: lastElement.id + 1,
          model: 'New Car',
          color: 'blue'
        }
      ]
    })
  }
  
  onRemoveBtnClick() {
    const { state: { array } } = this;
      if (array.length > 1) {
          this.setState({
              array: array.slice(1, array.length)
          })
      }
      else{
          alert("There is only one car in the table. You can't remove last element.")
      }
  }

  onFilterBtnClick() {
      const { state: { array } } = this;
      let blueCol = array.filter(function(array) {
          return array.color === 'blue';
      });
      this.setState({
        array: blueCol
      })
  }


  render() {
    return (
      <div>
        <List arr={this.state.array}/>
        <button style={{ padding: 10, margin: 10 }} onClick={this.onAddBtnClick.bind(this)}>ADD ME</button>
        <button style={{ padding: 10, margin: 10 }} onClick={this.onRemoveBtnClick.bind(this)}>REMOVE ME</button>
        <button style={{ padding: 10, margin: 10 }} onClick={this.onFilterBtnClick.bind(this)}>FILTER ME</button>
      </div>
    )
  }
}
