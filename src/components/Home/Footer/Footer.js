import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="container" >
                <div className="row footer-content">
                    <div className="col-md-5">
                        <div className="row footer-content-address">
                            <div className="col-md-1 map">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div className="col-md-11">
                                <p><small>H#340 (4th Floor), Road #24,</small></p>
                                <p><small>New DOHS, Mohakhali, Dhaka, Bangladesh</small></p>
                                <p><small>Phone: 018XXXXXXXX</small></p>
                                <p><small>E-mail: info@company.com</small></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="row">
                            <div className="col-md-4">
                                <h5>Company</h5>
                                <p><small>About</small></p>
                                <p><small>Site Map</small></p>
                                <p><small>Support Center</small></p>
                                <p><small>Terms Conditions</small></p>
                                <p><small>Submit Listing</small></p>
                            </div>
                            <div className="col-md-4">
                                <h5>Quick Links</h5>
                                <p><small>Quick Links</small></p>
                                <p><small>Rantals</small></p>
                                <p><small>Sales</small></p>
                                <p><small>Contact</small></p>
                                <p><small>Terms Conditions</small></p>
                                <p><small>Our Blog</small></p>
                            </div>
                            <div className="col-md-4">
                                <h5>About us</h5>
                                <p><small>We are the top real estate </small></p>
                                <p><small>agency in Sydney, with agents  </small></p>
                                <p><small>available to answer any </small></p>
                                <p><small>question 24/7. </small></p>

                                <a href=""><i class="fa fa-facebook"></i></a>
                                <a href=""><i class="fa fa-twitter"></i></a>
                                <a href=""><i class="fa fa-google"></i></a>
                                <a href=""><i class="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;