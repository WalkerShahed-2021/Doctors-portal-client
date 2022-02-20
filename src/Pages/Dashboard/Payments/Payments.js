import React, { useEffect, useState } from 'react';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe,  } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { useParams } from 'react-router-dom';

const stripePromise = loadStripe('pk_test_51IrxeLIHO83mS2Y7eJhXUEUaGSIZrfgWhfv7XiIgkuZzBGXTyqn3zgXKIHXKRhhIn1EYjJjwpJOgn4kKMDnN6BuO00BJ8kKhA0')

const Payments = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointments] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointments(data));
    }, [appointmentId])
    return (
        <div className='App'>
            <h1>Please Pay for: {appointment.patientName} {appointment.serviceName}</h1>
            <h4>${appointment.price}</h4>
            {appointment?.price &&
                <Elements stripe={stripePromise}>
                <CheckoutForm 
                 appointment={appointment}
                />
            </Elements>}
        </div>
    );
};

export default Payments;