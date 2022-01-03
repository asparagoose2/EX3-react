import React, { Component } from 'react'
import '../styles/CardsList.css'
import Card from './Card'
import SearchBar from './SearchBar'

export default class CardsList extends Component {
    render() {
        return (
            <div className="CardsList">
                <SearchBar/>
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
