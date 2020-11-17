import React, { useState } from 'react';
import './AddRentBody.scss';
import {  faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const AddRentBody = () => {
    const [info, setInfo] = useState({}); 
    const [file, setFile] = useState(null);
    const handleBlur = (e) =>{
        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFile = (e) =>{
        const newFile= e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit =()=>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('service', info.service)
        formData.append('price', info.price)
        formData.append('location', info.location)
        formData.append('bathroom', info.bathroom)
        formData.append('bedroom', info.bedroom)

        fetch('http://localhost:3030/addHouse', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }
    return (
        <div className="addRentBody-container">
            <form onSubmit={handleSubmit} className="form">
                <div className="formDiv">
                    <input type="text" onBlur={handleBlur} className="form-control input" id="formGroupExampleInput" name="service" placeholder="Service"/> <br/>
                    <input type="text" onBlur={handleBlur} className="form-control input" id="formGroupExampleInput" name="price" placeholder="Price" />   <br/>
                    <input type="text" onBlur={handleBlur} className="form-control input" id="formGroupExampleInput" name="location" placeholder="Location" />   <br/>
                    <input type="text" onBlur={handleBlur} className="form-control input" id="formGroupExampleInput" name="bathroom" placeholder="No of Bathroom" />   <br/>
                    <input type="text" onBlur={handleBlur} className="form-control input" id="formGroupExampleInput" name="bedroom" placeholder="No of Bedroom" />   <br/>
                    <div style={{marginLeft:300}}>
                        <input type="file" id="file" onChange={handleFile} style={{display:"none", marginRight:50}}/>
                        <label for="file" className='btn btn-success'> <FontAwesomeIcon icon={faCloudUploadAlt} style={{marginRight:10}} />Upload Image</label>
                    </div>
                </div>
                <div style={{marginLeft:430}}>
                    <button className="btn btn-dark" type="submit">Submit</button>
                </div>
                
        </form>
        </div>
    );
};

export default AddRentBody;