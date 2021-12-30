import React from 'react';
import { Link } from 'react-router-dom';
import '../styleComponent/Order.css'

function Order() {
    return (
        <div className='order'>
            <h1>Car is Booked!</h1>
            <h3>It's On The way</h3>
            <p>Thank Your For Beliving On US!</p>
            <Link to='/'>
            <button>Go back</button>
            </Link>
        </div>
    )
}

export default Order;
