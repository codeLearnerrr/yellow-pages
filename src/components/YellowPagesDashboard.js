import React, { Component } from 'react';
import HeaderWithLogo from './HeaderWithLogo';
import SearchBar from './SearchBar';

class yellowPagesDashboard extends Component {
    render() {
        return (
            <div className="App">
                <HeaderWithLogo/>
                <SearchBar/>
            </div>
        )
    }
}
export default yellowPagesDashboard;