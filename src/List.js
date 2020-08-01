import React, { Component } from 'react'
import ListElement from './ListElement'

const styles = {
    model: {
      padding: 20,
      paddingLeft: 10,
      listStyleType: 'none',
    }
  };

export default class List extends Component {

    mapElement = (object) => {
        return <ListElement key={object.id} model={object.model}/>
    };

    render() {
        console.log('this.props:', this.props);
        return (
            <div>
                <ul style={styles.model}>
                    {this.props.arr.map(({ id, model }) => <ListElement key={id} model={model}/>)}
                </ul>
            </div>
        )
    }
}
