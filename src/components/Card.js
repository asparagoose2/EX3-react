import React, { Component } from 'react'
import '../styles/Card.css'
import ButtonsRow from './ButtonsRow'
import { GeoAltFill } from 'react-bootstrap-icons'
export default class Card extends Component {
    render() {
        return (
            <div className="cardDiv">
            
            <img className='cardImg' src={require("../images/beach.jpg")} alt='beach'/>
            <ButtonsRow/>
            <h4 className='cardTitle'>
                Kudahuvadhoo Island 
            </h4>
            <div className='cardDetails'>
                <span> <GeoAltFill color='#FF6647FF' size={12}/> <span>Maldives</span></span>
                <span>1124$</span>
            </div>
            </div>
        )
    }
}
