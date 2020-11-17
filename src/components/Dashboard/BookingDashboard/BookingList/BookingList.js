import React from 'react';
import BookingBody from '../BookingBody/BookingBody';
import BookingHeader from '../BookingHeader/BookingHeader';
import BookingSidebar from '../BookingSidebar/BookingSidebar';

const BookingList = () => {
    return (
        <div className="container" >
            <div>
                <BookingHeader></BookingHeader>
            </div>
            <div className="row" >
                <div className="col-md-3">
                    <BookingSidebar></BookingSidebar>
                </div>
                <div className="col-md-9">
                    <BookingBody></BookingBody>
                </div>
            </div>
        </div>
    );
};

export default BookingList;