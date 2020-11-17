import React, { useContext } from 'react';
import './MyRentHeader.scss';
import logo from '../../../../logos/Logo.png';
import { UserContext } from '../../../../App';

const MyRentHeader = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);  
    return (
        <header>
            <div className="row mb-5" >
                <div className="col-md-3" >
                    <img className="logo" src={logo} alt="" />
                </div>
                <div className="col-md-6" >
                    <h2>Add Rent House</h2>
                </div>
                <div className="col-md-3" >
                    <h3> {loggedInUser.name} </h3>
                </div>
            </div>
        </header>
    );
};

export default MyRentHeader;