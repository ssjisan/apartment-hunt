import React from 'react';
import './HouseRentCart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBath, faBed } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const HouseRentCart = ({houseRent}) => {
    return (
        <div className="col-md-4 HouseRentCart-container">
            <img className="card-img  mx-auto" src={`data:image/png;base64,${houseRent.image.img}`} alt="" />
            <div className="card-container">
                <h4>{houseRent.service}</h4>
                <h5>  <FontAwesomeIcon icon={faMapMarkerAlt} /> {houseRent.location}</h5>
                <div className="row">
                    <div className="col-md-6" >
                        <p style={{ float: 'left' }}><FontAwesomeIcon icon={faBed} /> Bedrooms:{houseRent.bedroom}</p>
                    </div>
                    <div className="col-md-6" >
                        <p style={{ float: 'right' }}><FontAwesomeIcon icon={faBath} />Bathrooms:{houseRent.bathroom}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6" >
                        <h2 style={{ float: 'left' }}>${houseRent.price}</h2>
                    </div>
                    <div className="col-md-6" >
                        <Link to={`/homeDetails/${houseRent._id}`}>
                            <button style={{ float: 'right' }} className="btn-cart">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseRentCart;