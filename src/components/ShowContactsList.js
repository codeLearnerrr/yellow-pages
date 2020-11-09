import React, { Component } from 'react'
import ContactListOneContact from './ContactListOneContact';
import '../YellowPages.css';

class ShowContactsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mockData: [],
        };
    };
    componentDidMount() {
        fetch('http://localhost:5000/getAllPeopleJSON')
            .then(res => res.json())
            .then((body) => {
                this.setState({
                    mockData: body,
                });
            });
        
    };
    render() {
        const { mockData } = this.state;
        const groupedByLetter = mockData.reduce((groups, contact) => {
            const letter = contact.fname[0].toUpperCase();
            const group = groups[letter] || [];
            group.push(contact);
            groups[letter] = group;
            return groups;
        }, {})
        return Object.entries(groupedByLetter).map(([letter, contacts], index) => {
            return (
                <div key={index} style={{ backgroundColor: 'yellow', width: '80%', padding: '15px' }}>
                    <h1>{letter}</h1>
                    {contacts.map((inputMap, index) => (
                        <ContactListOneContact
                            key={index}
                            fname={inputMap.fname}
                            lname={inputMap.lname}
                            contact={inputMap.contact}
                        />
                    ))}
                </div>
            );
        });
    }
}

export default ShowContactsList
