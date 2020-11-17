import React, { useEffect, useState } from 'react';

const BookingBody = () => {
    const [bookings, setBookings] = useState([]);

    useEffect( () => {
        fetch('https://damp-garden-40169.herokuapp.com/bookings')
        .then(res => res.json())
        .then(data => {
            setBookings(data)
            console.log(bookings);
        })
    }, [])
    return (
        <div>
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone No</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                {
                    
                    bookings.map(booking=>
                        <tbody>
                            <tr>
                                <td className="pt-4">{booking.name}</td>
                                <td className="pt-4">{booking.email}</td>
                                <td className="pt-4">{booking.number}</td>
                                <td className="pt-4">{booking.message}</td>
                            </tr>
                        </tbody>
                    )
                }
            </table>
            
            
        </div>
    );
};

export default BookingBody;