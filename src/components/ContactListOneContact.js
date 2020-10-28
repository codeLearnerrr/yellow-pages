import React, { Component } from 'react'
import '../YellowPages.css';
export default class ContactListOneContact extends Component {
    render() {
        return (
            <div >
                <p>
                    FNAME:{this.props.fname}
                CONTACT:{this.props.contact}<br />
                LNAME:{this.props.lname}<br />
                ID:{this.props.id}<br />
                </p>
                <hr />

            </div>
        )
    }
}
