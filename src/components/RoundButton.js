import React, { Component } from 'react'
import '../styles/RoundButton.css'
import { Trash } from 'react-bootstrap-icons'
import { Pencil } from 'react-bootstrap-icons'
import { Plus } from 'react-bootstrap-icons'
import { Check } from 'react-bootstrap-icons'
import { X } from 'react-bootstrap-icons'
import { Search } from 'react-bootstrap-icons'

export default class RoundButton extends Component {
    
    renderSwitch(icon, border) {
        switch (icon) {
            case 'Trash':
                return <Trash size={18} color='white'/>;
            case 'Pencil':
                return <Pencil size={18} color='white'/>;
            case 'Search':
                return <Search size={20} color='white'/>;
            case 'X':
                return <X size={20} color='white'/>;
            case 'Check':
                return <Check size={20} color='white'/>;
            case 'Plus':
                return <Plus size={20} color='white'/>;
            default:
                return <Trash className="icon" />
        }
    }

    render() {
        return (
            <button className={this.props.border? "roundBtn" : "roundBtnNoBorder"}>
                {
                    this.renderSwitch(this.props.icon, this.props.border)
                }
            </button>
        )
    }
}
