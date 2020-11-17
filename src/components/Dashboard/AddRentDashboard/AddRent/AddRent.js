import React from 'react';
import AddRentBody from '../AddRentBody/AddRentBody';
import AddRentHeader from '../AddRentHeader/AddRentHeader';
import AddRentSidebar from '../AddRentSidebar/AddRentSidebar';

const AddRent = () => {
    return (
        <div className="container" >
            <div>
                <AddRentHeader></AddRentHeader>
            </div>
            <div className="row" >
                <div className="col-md-3">
                    <AddRentSidebar></AddRentSidebar>
                </div>
                <div className="col-md-9">
                    <AddRentBody></AddRentBody>
                </div>
            </div>
        </div>
    );
};

export default AddRent;