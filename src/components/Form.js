import React, { Component } from 'react'
import '../styles/Form.css'
import RoundButton from './RoundButton'

export default class Form extends Component {
    render() {
        return (
            <div className='form'>
                <h1>Add new vacation</h1>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Name" name='name'/>
                    <label htmlFor="location">Location</label>
                    <input type="text" placeholder="Location" name="location"/>
                    <label htmlFor="price">Price</label>
                    <input type="number" placeholder="Price" name="price" />
                    <label htmlFor="image">Image url</label>
                    <input type="text" placeholder="Image url" name='image'/>
                </form>
                <RoundButton icon='Plus'/>
            </div>
        )
    }
}
