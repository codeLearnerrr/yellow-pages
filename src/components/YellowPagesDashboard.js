import React, { Component } from 'react';
import HeaderWithLogo from './HeaderWithLogo';
import SearchBar from './SearchBar';
import '../YellowPages.css';
import ShowContactsList from './ShowContactsList';

class yellowPagesDashboard extends Component {
    render() {
        return (
            <div className="App">
                <HeaderWithLogo/>
                <SearchBar />
                <ShowContactsList/>
            </div>
        )
    }
}
export default yellowPagesDashboard;