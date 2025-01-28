import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';

//add key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

const Payment = () => {
    const paymentDetails = useLoaderData();
    
    return (
        <div>
            <div className='relative bg-[#e2ff31] bg-opacity-50 h-40 lg:h-48 flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold'>Payment</h1>
            </div>
            <div className='max-w-lg mx-auto my-20'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm paymentDetails={paymentDetails}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;