import React, { useContext, useEffect, useState } from 'react';
import './ApartmentDetails.css';
import pic7 from '../../../images/Rectangle 406.png';
import pic8 from '../../../images/Rectangle 407.png';
import pic9 from '../../../images/Rectangle 408.png';
import pic10 from '../../../images/Rectangle 409.png';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../../App';

const ApartmentDetails = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);  
    const { houseId } = useParams();
    console.log(houseId);
    const [home, setHome] = useState([]);
    const [info, setInfo] = useState({}); 

    useEffect(()=>{
        fetch('http://localhost:3030/house')
        .then(res=> res.json())
        .then(data=> {
        const house = data.filter(dt => dt._id == houseId) 
        setHome(house[0]);
        console.log(house);
        })
    },[])
    const { register, handleSubmit,  errors } = useForm();
    const handleBlur = (e) =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const onSubmit = data=>{
        const formData = new FormData()
        // formData.append('service', info.service)
        formData.append('name', info.name)
        formData.append('email', info.email)
        formData.append('number', info.number)
        formData.append('message', info.message)
        fetch('http://localhost:3030/addRequest',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(success=>{
            if(success){
                alert('Appointment Confirm');
            }
        })
    }
    return (
        <div className="apartmentDetails-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="img-section">
                        {/* <img className="card-img  mx-auto" src={`data:image/png;base64,${home.image.img}`} alt="" /> */}

                            <div className="row img-section-small">
                                <div className="col-md-3">
                                    <img src={pic7} alt="pic" className="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <img src={pic8} alt="pic" className="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <img src={pic9} alt="pic" className="img-fluid" />
                                </div>
                                <div className="col-md-3">
                                    <img src={pic10} alt="pic" className="img-fluid" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-8">
                                <h2> {home.service} </h2>
                            </div>
                            <div className="col-md-4">
                                <h2 style={{ float: 'right' }}>$ {home.price} </h2>
                            </div>
                        </div>


                        <p> {home.apartmentDescription} </p>
                        <h3>Price Details-</h3>
                        <p> {home.priceDetails} </p>

                        <h3>Property Details-</h3>
                        <p> {home.propertyDetails} </p>

                    </div>


                    <div className="col-md-4">

                        <form className="apartment-form" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" onBlur={handleBlur} ref={register({ required: true })} name="name"  placeholder="Full Name" className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>

                            <div className="form-group">
                                <input type="number"  onBlur={handleBlur} ref={register({ required: true })} name="number" placeholder="Phone No." className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>

                            <div className="form-group">
                                <input type="text"  onBlur={handleBlur} ref={register({ required: true })} name="email"  placeholder="Email Address" className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>

                            <div className="form-group">
                                <textarea type="text" rows="8"  onBlur={handleBlur} ref={register({ required: true })} name="message" placeholder="Message..." className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>

                            <div className="form-group">
                                
                                    <button type="submit" className="btn-modify form-control">Submit</button>
                

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApartmentDetails;