import React from 'react';
import './Service.css';
import logo1 from '../../../logos/apartment 1.png';
import logo2 from '../../../logos/affordable 1.png';
import logo3 from '../../../logos/lessee 1.png';
import ServiceCart from '../ServiceCart/ServiceCart';

const Service = () => {
    const serviceData = [

        {
            id: '1',
            title: 'Wide Range of Properties',
            description: 'With a robust selection of popular properties on hand, as well as leading properties from experts.',
            img: logo1,
        },
        {
            id: '2',
            title: 'Financing Made Easy',
            description: 'Our stress-free finance department that can find financial solutions to save you money.',
            img: logo2,
        },
        {
            id: '3',
            title: 'Trusted by Thousands',
            description: '10 new offers every day. 350 offers on site, trusted by a community of thousands of users.',
            img: logo3,
        },

    ]
    return (
        <div className="service-container">
            <div className="container">
                <div className="service-heading">
                    <p>Service</p>
                    <h3>We're an agency tailored to all</h3>
                    <h3>clients' needs that always delivers</h3>
                </div>

                <div className="row">
                    {
                        serviceData.map(service => <ServiceCart key={service.id} service={service} ></ServiceCart>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Service;