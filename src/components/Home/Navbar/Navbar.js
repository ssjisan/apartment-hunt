import React from 'react';
import './Navbar.scss';
import logo from '../../../logos/Logo.png';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light container">
            <a class="navbar-brand" href="#"> <img src={logo} alt="Logo Photo" /> </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#service">Service</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#concerns">Concerns</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    <Link to="/dashboard">
                        <li class="nav-item">
                            <a class="nav-link" href="#dashboard">Dashboard</a>
                        </li>
                    </Link>
                    <Link to="/login">
<<<<<<< HEAD
                    <li class="nav-item nav-btn">
                        <a class="nav-link " href="#login">Login</a>
                    </li>
=======
                        <li class="nav-item nav-btn">
                            <a class="nav-link " href="#">Login</a>
                        </li>
>>>>>>> b8a21803948b7ea00a8e89b5f5ccbe85d84f7fb2
                    </Link>
                </ul>
            </div>
        </nav>




    );
};

export default Navbar;