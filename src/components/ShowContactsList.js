import React, { Component } from 'react'
import ContactListOneContact from './ContactListOneContact'
import '../YellowPages.css';
export class ShowContactsList extends Component {
    render() {
        return (
            <div>
                <p className="alignTextCenter">Here's contact list data</p>
                <ContactListOneContact/>
            </div>
        )
    }
}

export default ShowContactsList
