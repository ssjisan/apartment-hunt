import React from 'react';
import Navbar from '../../HomeDetails/Navbar/Navbar';
import Apartment from '../Apartment/Apartment';

const Header = () => {
    return (
        <div className="header-container">

            <Navbar></Navbar>
            <Apartment></Apartment>

        </div>
    );
};

export default Header;