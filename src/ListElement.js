import React, { Component } from 'react'

export default class ListElement extends Component {
    render() {
        return (
                <li style={{ border: '1px solid lightgrey', marginBottom: '20px' }}>{this.props.model}</li>
        )
    }
}
