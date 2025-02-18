import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useClassInfo from '../../hooks/useClassInfo';
import TrainerSlot from './TrainerSlot';
import { useQuery } from '@tanstack/react-query';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

function CheckIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-3 w-3"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}

const TrainerBooking = () => {
    const {user} = useAuth();
    const navigate = useNavigate();
    const [packageName, setPackageName] = useState({});
    const { data } = useLoaderData();
    const axiosPublic = useAxiosPublic();
    console.log(data);
    const handlePackage= (name) => {
        // console.log(name)
        if(name === 'Basic'){
            setPackageName({membershipName: name, price: 10})
        }
        else if(name === 'Standard'){
            setPackageName({membershipName: name, price: 50})
        }
        else if(name === 'Premium'){
            setPackageName({membershipName: name, price: 100})
        }
        
        
    }
    // console.log(packageName)
    // slot id, trainer id, user id, mem type, mem amount, payment status
    const joinMemberInfo = {memberEmail: user.email,detailInfo: data, slotId: data._id, trainerId: data.trainerId, memberEmail: user.email, membership:packageName, payment: "initialize"}
    console.log( joinMemberInfo)
    const handleJoin = async() => {

        // const joinMemberInfo = {slotId: data._id, trainerId: data.trainerId, memberEmail: user.email, membership:packageName, payment: "initialize"}
        // const joinMemberInfo = {slotId: data._id, trainerId: data.trainerId, memberEmail: user.email, membership:packageName, payment: "initialize"}
        // console.log(joinMemberInfo)
        const res = await axiosPublic.post(`/booking`, joinMemberInfo);
        console.log(res.data);
        if(res.data.insertedId){
            Swal.fire({
                title: "Want to pay?",
                text: "Booking complete.",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go to Payment"
            })
            .then((result) => {
                if (result.isConfirmed) {
                    navigate(`/payment/${res.data.insertedId}`);
                }
            });
        }
        // console.log(joinMemberInfo);
    }

    return (
        <div className=''>
            <div className='relative bg-[#e2ff31] bg-opacity-50 h-40 lg:h-48 flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold'>Book your Trainer</h1>
            </div>
            <div className='my-10'>
                <Card className="mt-6 w-96 mx-auto">
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="mb-2">
                            Trainer: {data.trainerName}
                        </Typography>
                        <Typography>
                            Selected Slot: {data.day} - {data.slot}
                        </Typography>
                        <Typography>
                            Class Name: {data.trainerClass}
                        </Typography>
                    </CardBody>
                </Card>
            </div>
            <div className='my-10 grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto'>
                {/* basic */}
                <Button
                    onClick={() => handlePackage("Basic")}
                    color="white"
                    className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 focus:bg-[#f1ffa4]"
                    ripple={false}
                    fullWidth={true}
                >
                    <Card color="gray" variant="gradient" className="p-8">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                        >
                            <Typography
                                variant="small"
                                color="white"
                                className="font-normal uppercase"
                            >
                                Basic Membership
                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                            >
                                <span className="mt-2 text-4xl">$</span>10{" "}
                                <span className="self-end text-4xl">/mo</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-start gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Access to gym facilities during regular operating hours.</Typography>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Use of cardio and strength training equipment.</Typography>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Access to locker rooms and showers.</Typography>
                                </li>
                            </ul>
                        </CardBody>
                        {/* <CardFooter className="mt-12 p-0">
                            <Button
                                color="white"
                                className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                ripple={false}
                                fullWidth={true}
                            >
                                Buy Now
                            </Button>
                        </CardFooter> */}
                    </Card>
                </Button>
                {/* standard */}
                <Button
                    onClick={() => handlePackage("Standard")}
                    color="white"
                    className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 focus:bg-[#f1ffa4]"
                    ripple={false}
                    fullWidth={true}
                >
                    <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                        >
                            <Typography
                                variant="small"
                                color="white"
                                className="font-normal uppercase"
                            >
                                Standard  Membership
                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                            >
                                <span className="mt-2 text-4xl">$</span>50{" "}
                                <span className="self-end text-4xl">/mo</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-start gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">All benefits of the basic membership.</Typography>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Access to group fitness classes such as yoga, spinning, and Zumba.</Typography>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Use of additional amenities like a sauna or steam room.</Typography>
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                </Button>
                {/* premium */}
                <Button
                    onClick={() => handlePackage("Premium")}
                    color="white"
                    className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 focus:bg-[#f1ffa4]"
                    ripple={false}
                    fullWidth={true}
                >
                    <Card color="gray" variant="gradient" className="w-full max-w-[20rem] p-8">
                        <CardHeader
                            floated={false}
                            shadow={false}
                            color="transparent"
                            className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
                        >
                            <Typography
                                variant="small"
                                color="white"
                                className="font-normal uppercase"
                            >
                                Premium Membership
                            </Typography>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mt-6 flex justify-center gap-1 text-7xl font-normal"
                            >
                                <span className="mt-2 text-4xl">$</span>100{" "}
                                <span className="self-end text-4xl">/mo</span>
                            </Typography>
                        </CardHeader>
                        <CardBody className="p-0">
                            <ul className="flex flex-col gap-4">
                                <li className="flex items-start gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">All benefits of the standard membership.</Typography>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Access to personal training sessions with certified trainers.</Typography>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                        <CheckIcon />
                                    </span>
                                    <Typography className="font-normal">Discounts on additional services such as massage therapy or nutrition counseling.</Typography>
                                </li>
                            </ul>
                        </CardBody>
                    </Card>
                </Button>
            </div>
            <div className='max-w-5xl mx-auto mb-10'>
                <Button
                    onClick={handleJoin}
                    size="lg"
                    className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                    ripple={false}
                    fullWidth={true}
                >
                    Buy Now
                </Button>
            </div>
        </div>
    );
};

export default TrainerBooking;