import React, { Component } from 'react'
import '../styles/CardsList.css'
import Card from './Card'

export default class CardsList extends Component {
    render() {
        return (
            <div className="CardsList">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        )
    }
}
