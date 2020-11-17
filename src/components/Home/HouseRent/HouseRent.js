import React, { useEffect, useState } from 'react';
import './HouseRent.css';
import HouseRentCart from '../HouseRent-cart/HouseRentCart';

const HouseRent = () => {
    const [house, setHouse] = useState([]); 
    useEffect(()=>{
        fetch('http://localhost:3030/house')
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setHouse(data);
        })
    },[])
    return (
        <div className="houseRent-container">
            <div className="container">
                <div className="houseRent-heading">
                    <h3>Discover the latest Rent</h3>
                    <h3>available today</h3>
                </div>

                <div className="row">
                    {
                        house.map(houseRent => <HouseRentCart key={houseRent.id} houseRent={houseRent} ></HouseRentCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HouseRent;