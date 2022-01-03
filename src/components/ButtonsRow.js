import React, { Component } from 'react'
import RoundButton from './RoundButton'
import '../styles/ButtonsRow.css'

export default class ButtonsRow extends Component {
    render() {
        return (
            <div className={"ButtonsRow"}>
                <RoundButton icon="Trash"/>
                <RoundButton icon="Pencil"/>
            </div>
        )
    }
}
