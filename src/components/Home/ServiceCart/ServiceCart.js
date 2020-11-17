import React from 'react';
import './ServiceCart.scss';

const ServiceCart = ({ service }) => {
    return (
        <div className="col-md-4 serviceCard-container">
            <div className="card-content">
                <img src={service.img} className="service-img" />
                <h5>{service.title}</h5>
                <p>{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceCart;