import React, { Component } from 'react'
import ContactListOneContact from './ContactListOneContact';
import '../YellowPages.css';

const mockData = [
    {
        "A": [
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
        "B": [
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
    }
];

class ShowContactsList extends Component {
    render() {
        const gotIt = mockData.map((inputMap) => (console.log(inputMap)));
        return (
            <div style={{ backgroundColor: 'yellow', width: '80%' }}>
                {/* <h1>A</h1> */}
                {/* <TestComponent/> */}
                {gotIt}
                {/* {this.printArrayOfAs()} */}
            </div>
        )
    }
}

export default ShowContactsList
