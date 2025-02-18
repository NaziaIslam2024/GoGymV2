import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Button, Card } from "@material-tailwind/react";

const CheckoutForm = ({paymentDetails}) => {
    console.log(paymentDetails.data)
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [slotDetails, setSlotDetails] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const totalPrice = paymentDetails.data.membership.price;
    const { user } = useAuth();

    useEffect(() => {
        console.log(totalPrice)
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                // console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
        // const res = axiosSecure.get(`/get-class-name/:${paymentDetails.data.slotId}`)
        // setSlotDetails(res.data);
    }, [axiosSecure, totalPrice])
    // [axiosSecure, totalPrice]
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('payment error', error);
            setError(error.message);
        }
        else {
            // console.log('payment method', paymentMethod)
            setError('');
        }

        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })

        if (confirmError) {
            // console.log('confirm error')
        }
        else {
            //slotId theke training class name pawa
            const getClassNameRes = await axiosSecure.get(`/get-class-name/${paymentDetails.data.slotId}`)
            console.log("claser name pawa---->", getClassNameRes.data.trainerClass);
            setSlotDetails(getClassNameRes.data.trainerClass);

            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                // console.log('transaction id: ', paymentIntent.id);
                setTransactionId(paymentIntent.id);
                console.log("slotid----> ",paymentDetails.data.slotId)

                //save payment in db
                const payment = {
                    memberEmail: user.email,
                    price: totalPrice,
                    date: new Date(),
                    payment: "successed",
                    transactionId: paymentIntent.id,
                    slotId: paymentDetails.data.slotId,
                    trainerId: paymentDetails.data.trainerId,
                    paymentDetails: paymentDetails.data
                }

                const res = await axiosSecure.post('/save-payment', payment)
                // console.log("payment saved ", res.data);
                if (res.data.insertedId) {
                    console.log("clase nam---> ",getClassNameRes.data.trainerClass)

                    await axiosSecure.put('/update-bookingCount', {bookingCount: 1, trainingName: getClassNameRes.data.trainerClass})
                    .then(res => {
                        if(res.data.modifiedCount > 0){
                            Swal.fire("Payment successful")
                        }
                    })
                    
                }
            }
        }

    }
    return (
        <Card color="white" variant="gradient" className="p-4">
            <form className="m-2" onSubmit={handleSubmit}>
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
                <div className="flex justify-center">
                    <Button color="black" className="mt-6 !bg-[#e2ff31] !text-black" type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </Button>
                </div>
                {/* <button className="btn btn-sm" type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button> */}
                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-600"> Your transaction id: {transactionId}"</p>}
            </form>
        </Card>
    );
};

export default CheckoutForm;