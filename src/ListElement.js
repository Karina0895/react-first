import React, { Component } from 'react'

export default class ListElement extends Component {
    render() {
        return (
            <div style={{ border: '1px solid red' }}>
                <li>{this.props.text}</li>
            </div>
        )
    }
}
