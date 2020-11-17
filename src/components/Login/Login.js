import React, { useContext, useState } from 'react';
import './Login.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { CreateUserWithEmailAndPassword, handleFbLogin, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';
import Navbar from '../Home/Navbar/Navbar';



const Login = () => {

    const [newUser, setNewUser] = useState(false)

    const [user, setUser] = useState({
        isSignnedIn: false,
        newUser: false,
        name: '',
        email: '',
        password: '',
        photo: '',
    })
    initializeLoginFramework();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponse(res, false);
            })
    }

    const fbLogin = () => {
        handleFbLogin()
            .then(res => {
                handleResponse(res, true);
            })
    }

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        if (redirect) {
            history.replace(from);
        };
    };



    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);

        let isFromValid = true;

        if (e.target.name === 'email') {
            isFromValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = (e.target.value).length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFromValid = (isPasswordValid && passwordHasNumber);
        }
        if (isFromValid) {
            const newUserInfo = { ...user }
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }


    const handleSubmit = (e) => {
        if (newUser && user.email && user.password) {
            CreateUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })

        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res, true);
                })
        }

        e.preventDefault();
    }




    return (
        <div className="container">
            <div>
                <Navbar></Navbar>
            </div>
            <div className="row">
                <div className="col-md-3">

                </div>
                <div className="col-md-6">
                    <div className="login-section">
                        <h3>Login</h3>
                        <form onSubmit={handleSubmit} >
                            {
                                newUser && <p>Create a new account</p>
                            }
                            {
                                newUser && <input type="text" className="form-control" name="name" onBlur={handleChange} placeholder="Enter your First Name" />
                            }
                            <br />

                            <input type="text" name='email' className="form-control" onBlur={handleChange} placeholder="Enter your email..." required />
                            <br />
                            <input type="password" name='password' className="form-control" onBlur={handleChange} placeholder="Enter your password" required />
                            <br />
                            <input type="submit" className="form-control btn-modify" value={newUser ? ('Sign Up') : ('Sign In')} />
                            <br />
                            <button className="btn-modify" name="newUser" onClick={() => setNewUser(!newUser)} >  {newUser ? ('Sign In') : ('Create a new user')} </button>
                        </form>

                        <br />
                        <p style={{ color: 'red' }} > {newUser.error} </p>
                        {
                            newUser.success && <p style={{ color: 'green' }} > User {newUser ? 'Create' : 'Logged in'} successfully </p>
                        }
                    </div>
                </div>
                <div className="col-md-3">

                </div>
            </div>
            <div className="social-section">
                <button className="google-facebook" onClick={googleSignIn}>Continue with Google</button>
                <br />
                <br />
                <button className="google-facebook" onClick={fbLogin} > Continue with Facebook</button>

            </div>


        </div>
    );
};

export default Login;