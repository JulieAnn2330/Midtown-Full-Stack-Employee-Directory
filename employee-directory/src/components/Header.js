import React from 'react';
import Midtown from './Midtown-Logo-2.png'

function Header() {
    return (
        <div className="header">
            <h1>Midtown Full Stack Technologies Employee Directory</h1>
            <img className="logo" src= { Midtown } alt="Logo" />
        </div>
    );
}

export default Header;