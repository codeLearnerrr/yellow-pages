import React from 'react';
import logo from '../media/logo.svg';
import '../YellowPages.css';

function HeaderWithLogo() {
    return (
        <div className="headerLogo">
            <img src={logo} alt="Yellow Pages Logo" />
        </div>
    )
}

export default HeaderWithLogo;
