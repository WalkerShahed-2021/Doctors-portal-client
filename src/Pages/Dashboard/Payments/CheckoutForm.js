import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from './../../../Hooks/useAuth';
import { CircularProgress } from '@mui/material';


const CheckoutForm = ({ appointment }) => {
    const { price, patientName, serviceName, email, _id } = appointment;
    const stripe = useStripe()
    const elements = useElements();
    const {user} = useAuth();

    const [error, setError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
    const [sucess, setSucess] = useState('');
    console.log(clientSecret);

    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret));
    }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }
        setProcessing(true);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message);
            setSucess('')
        }
        else {
            setError('');
            console.log(paymentMethod);
        }

        //payment intent 
        const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: patientName,
                  email: user.email,
                },
              },
            },
          );

          if(intentError){
              setError(intentError.message);
              setSucess('');
          }
        else{
             setError('');
             setSucess('your payment process sucessfully..')
            console.log(paymentIntent)
            setProcessing(false);
            //save to database 
            const payment = {
               amount: paymentIntent.amount,
               last4: paymentMethod.card.last4,
               transaction: paymentIntent.client_secret.slice('_secret')[0],
            }
            const url = `http://localhost:5000/appoinments/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
               {processing ? <CircularProgress/> : <button type="submit" disabled={!stripe || sucess}>
                    Pay ${price}
                </button>}
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {sucess && <p style={{ color: 'green' }}>{sucess}</p>}
        </div>
    );
};

export default CheckoutForm;