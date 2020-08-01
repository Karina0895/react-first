import React, { Component } from 'react'
import ListElement from './ListElement'

const styles = {
    text: {
      padding: 20,
    }
  }

export default class List extends Component {

    mapElement = (object) => {
        return <ListElement key={object.id} text={object.text}/>
    }

    render() {
        console.log('this.props:', this.props)
        return (
            <div>
                <ul style={styles.text}>
                    {this.props.arr.map(({ id, text }) => <ListElement key={id} text={text}/>)}
                </ul>
            </div>
        )
    }
}
