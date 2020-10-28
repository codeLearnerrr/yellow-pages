import React, { Component, Fragment } from 'react'
import ContactListOneContact from './ContactListOneContact'
import '../YellowPages.css';

const mockData = [
    {
        id: 1,
        fname: 'Amanda',
        lname: 'Gutierrez',
        contact: '(31) 9 9550-0230',
    },
    {
        id: 2,
        fname: 'Amanda',
        lname: 'Martins',
        contact: '(31) 9 4550-0280',
    },
    {
        id: 3,
        fname: 'Amanda',
        lname: 'Petri',
        contact: '(11) 9 9550-0230',
    },
    {
        id: 4,
        fname: 'Amanda',
        lname: 'Guzman',
        contact: '(12) 9 9750-0730',
    },
];
export class ShowContactsList extends Component {
    render() {
        const mockContacts = mockData.map((contactInfo) => (
            <ContactListOneContact
                key={contactInfo.id}
                id={contactInfo.id}
                fname={contactInfo.fname}
                lname={contactInfo.lname}
                contact={contactInfo.contact}
            />
        ))
        return (
            <div style={{backgroundColor: 'yellow', width:'50%'}}>
                {mockContacts}
            </div>
        )
    }
}

export default ShowContactsList
