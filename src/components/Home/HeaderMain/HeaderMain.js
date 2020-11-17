import React from 'react';
import './headerMain.scss';

const HeaderMain = () => {
    return (
        <div className="headerMain-container">
            <div className="content header-content" >
                <h1>FIND YOUR HOUSE RENT</h1>
                <input type="text" placeholder="Search..." />
                <button className="btn-modify" >Find Now</button>
            </div>
        </div>
    );
};

export default HeaderMain;