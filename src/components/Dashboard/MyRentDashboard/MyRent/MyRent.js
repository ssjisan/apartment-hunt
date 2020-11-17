import React from 'react';
import MyRentBody from '../MyRentBody/MyRentBody';
import MyRentHeader from '../MyRentHeader/MyRentHeader';
import MyRentSidebar from '../MyRentSidebar/MyRentSidebar';

const MyRent = () => {
    return (
        <div className="container" >
            <div>
                <MyRentHeader></MyRentHeader>
            </div>
            <div className="row" >
                <div className="col-md-3">
                    <MyRentSidebar></MyRentSidebar>
                </div>
                <div className="col-md-9">
                    <MyRentBody></MyRentBody>
                </div>
            </div>
        </div>
    );
};

export default MyRent;