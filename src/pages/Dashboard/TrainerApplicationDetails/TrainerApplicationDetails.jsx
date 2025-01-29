import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { axiosSecure } from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const TrainerApplicationDetails = () => {
    const trainerApplication = useLoaderData();
    const { name, url, age, availableDay, availableTime, bio, classDurationHour, email, experiences, role, skills, _id } = trainerApplication.data;
    console.log(trainerApplication.data)
    const details = {trainerName:name, trainerPhoto:url, email: email, trainingClass: skills, availableDay:availableDay,availableTime:availableTime}
    
    const handleConfirm = () => {
        axiosSecure.put(`/applied-trainer-details/${_id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Application Approved',
                    showConfirmButton: false,
                    timer: 900
                });
            }
        })
        console.log(details)
        axiosSecure.post(`/trainer-classinfo`, details)
        .then(res => {
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Application Approved',
                    showConfirmButton: false,
                    timer: 900
                });
                //todo: sohaner kase sunte hobe skills naki class then sei onujayi db te add korte hobe
            }
        })
    }
    const handleReject = () => {

    }
    return (
        <Card className="w-full max-w-5xl flex-row mx-auto mt-20">
            <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-none"
            >
                <img
                    src={url}
                    alt={name}
                    className="h-[70%] w-full object-cover"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray" className="mb-2">
                    {name}
                </Typography>
                {/* <div className='flex justify-between'> */}
                    <Typography variant="h6" color="blue-gray" className="mb-2 ">
                        {email}
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Age: {age}
                    </Typography>
                {/* </div> */}
                <Typography variant='paragraph' color="gray" className="mb-8 font-normal">
                    {bio}
                </Typography>
                <div className='flex justify-between'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Skills:   {
                            skills
                        }
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Experiences: <span className='font-normal'>{experiences} years</span>
                    </Typography>
                </div>
                <div className='flex justify-between'>
                    <Typography variant="h6" color="blue-gray" className="mb-2 ">
                        Available Days:{
                            availableDay.map((day, index) => <li className='font-normal' key={index}>{day.value}</li>)
                        }
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2 ">
                        Available Time:{
                            availableTime.map((day, index) => <li className='font-normal' key={index}>{day.value}</li>)
                        }
                    </Typography>
                </div>
                <div className='flex justify-between'>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Total class: <span className='font-normal'>{classDurationHour} hours</span>
                    </Typography>
                    <Typography variant="h6" color="blue-gray" className="mb-2">
                        Status: <span className='font-normal'>{role}</span>
                    </Typography>
                </div>
                <div className='flex justify-between mt-5'>
                    <Button onClick={handleConfirm} variant="outlined" color="green" className="flex items-center gap-2">
                        Confirm
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button>
                    <Button onClick={handleReject} variant="outlined" color="red" className="flex items-center gap-2">
                        Reject
                        <svg className='w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </svg>
                    </Button>
                </div>
            </CardBody>
        </Card >
    );
};

export default TrainerApplicationDetails;