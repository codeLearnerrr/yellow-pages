import React, { Component } from 'react'
import ContactListOneContact from './ContactListOneContact';
import '../YellowPages.css';

const mockData = {
    "categories": [
        {
            "categoryName": "A",
            "people": [
                {
                    "id": 1,
                    "fname": "Amanda",
                    "lname": "Gonzales",
                    "contact": "(31) 9 9580-2530",
                },
                {
                    "id": 2,
                    "fname": "Astrid",
                    "lname": "Guzman",
                    "contact": "(31) 9 9790-2530",
                },
                {
                    "id": 3,
                    "fname": "Aurora",
                    "lname": "Muñoz",
                    "contact": "(57) 9 9580-2530",
                },
            ],
        },
        {
            "categoryName": "B",
            "people": [
                {
                    "id": 4,
                    "fname": "Bernard",
                    "lname": "Rieu",
                    "contact": "(11) 9 4598-2530",
                },
                {
                    "id": 5,
                    "fname": "Bruna",
                    "lname": "Argerich",
                    "contact": "(21) 9 9790-7654",
                },
                {
                    "id": 6,
                    "fname": "Beatrice",
                    "lname": "Guth",
                    "contact": "(37) 9 7946-2530",
                },
            ]
        },

    ]
};


export class ShowContactsList extends Component {

    render() {

        const mockContacts = mockData.categories.map(function filterAndMap(contactInfo) {
            function header(contactInfo) {
                const result = contactInfo.people.map((inputPeople) => (
                    <ContactListOneContact
                        key={inputPeople.id}
                        id={inputPeople.id}
                        fname={inputPeople.fname}
                        lname={inputPeople.lname}
                        contact={inputPeople.contact}
                    />))

                return (result);
            
            }
            return (header);
        })
        return (
            <div style={{ backgroundColor: 'yellow', width: '80%' }}>
                {/* <h1>A</h1> */}
                {mockContacts}
                {/* {this.printArrayOfAs()} */}
            </div>
        )
    }
}

export default ShowContactsList
