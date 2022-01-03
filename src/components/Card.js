import React, { Component } from 'react'
import '../styles/Card.css'
import ButtonsRow from './ButtonsRow'
export default class Card extends Component {
    render() {
        return (
            <div className="cardDiv">
            
            <img className='cardImg' src={require("../images/beach.jpg")} alt='beach'/>
            <ButtonsRow/>
            </div>
        )
    }
}
