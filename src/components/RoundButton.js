import React, { Component } from 'react'
import '../styles/RoundButton.css'
import { Trash } from 'react-bootstrap-icons'
import { Pencil } from 'react-bootstrap-icons'

export default class RoundButton extends Component {
    
    render() {
        return (
            <button className="roundBtn">
                {
                    this.props.icon === 'Trash' ?
                    <Trash size={18} color='white'/> :
                    <Pencil size={18} color='white'/>
                }
            </button>
        )
    }
}
