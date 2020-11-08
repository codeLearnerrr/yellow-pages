import React, { Component } from 'react'
import ContactListOneContact from './ContactListOneContact';
import '../YellowPages.css';

// const mockData = [
//     {
//         "id": 1,
//         "fname": "Amanda",
//         "lname": "Gonzales",
//         "contact": "(31) 9 9580-2530",
//     },
//     {
//         "id": 2,
//         "fname": "Astrid",
//         "lname": "Guzman",
//         "contact": "(31) 9 9790-2530",
//     },
//     {
//         "id": 3,
//         "fname": "Aurora",
//         "lname": "Muñoz",
//         "contact": "(57) 9 9580-2530",
//     },
//     {
//         "id": 4,
//         "fname": "Bernard",
//         "lname": "Rieu",
//         "contact": "(11) 9 4598-2530",
//     },
//     {
//         "id": 5,
//         "fname": "Bruna",
//         "lname": "Argerich",
//         "contact": "(21) 9 9790-7654",
//     },
//     {
//         "id": 6,
//         "fname": "Zion",
//         "lname": "Guth",
//         "contact": "(37) 9 7946-2530",
//     },
//     {
//         "id": 7,
//         "fname": "Beatrice",
//         "lname": "Guth",
//         "contact": "(37) 9 7946-2530",
//     },
// ];
const mockData = [{}];
fetch('http://localhost:5000/getAllPeopleJSON')
    .then(res => res.json())
    .then(body => mockData = body);
    


class ShowContactsList extends Component {
    
    render() {
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
