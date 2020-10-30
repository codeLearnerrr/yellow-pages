import React, { Component } from 'react'
import '../YellowPages.css';
export default class ContactListOneContact extends Component {
    render() {
        return (
            <div>
                <p style={{ display: 'flex' }} > {this.props.mapKey} {this.props.lname}{" , "}{this.props.fname}<span id="lineFromNameToNumber"></span> {this.props.contact} </p>
            </div>
        )
    }
}
