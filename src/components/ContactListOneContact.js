import React, { Component } from 'react'
import '../YellowPages.css';
export default class ContactListOneContact extends Component {
    render() {
        return (
                <p key={this.props.index} style={{ display: 'flex' }} >
                    {this.props.lname}
                    {" , "}
                    {this.props.fname}
                    <span id="lineFromNameToNumber"></span>
                <a href={`tel:${this.props.contact}`}>{this.props.contact}</a>
                </p>
        )
    }
}
