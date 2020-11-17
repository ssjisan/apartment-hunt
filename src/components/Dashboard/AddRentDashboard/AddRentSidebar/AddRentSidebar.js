import { Link } from 'react-router-dom';
import './AddRentSidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCheckSquare, faCity } from '@fortawesome/free-solid-svg-icons'
import { faBuromobelexperte } from '@fortawesome/free-brands-svg-icons'

const AddRentSidebar = () => {
    return (
        <div className="sidebar">
            <ul className="list-unstyle">
                <li>
                    <Link to="/" className="liLink">
                        <FontAwesomeIcon icon={faBuromobelexperte} />
                        <span style={{marginLeft:10}}>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/bookingList" className="liLink">
                        <FontAwesomeIcon icon={faHome} />   
                        <span style={{marginLeft:10}}>Booking List</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addRent" className="liLink">
                    <FontAwesomeIcon icon={faCity} />
                        <span style={{marginLeft:10}}>Add Rent House</span>
                    </Link>
                </li>
                <li>
                    <Link to="/myRent" className="liLink">
                        <FontAwesomeIcon icon={faCheckSquare} />
                        <span style={{marginLeft:10}}>My Rent</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AddRentSidebar;