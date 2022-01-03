import React, { Component } from 'react'
import '../styles/SearchBar.css'
import RoundButton from './RoundButton'

export default class SearchBar extends Component {
    render() {
        return (
            <div className='searchBar'>
                <input type="text" placeholder="Search by name or location"/>
                <RoundButton icon='Search'/>
            </div>
        )
    }
}
