import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import {Input, Typography} from "@material-tailwind/react";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Newsletter = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axiosPublic.post('/newsletter', data)
        .then(res => {
            if (res.data.insertedId) {
                // console.log("Subscription has completed")
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Subscription has completed',
                    showConfirmButton: false,
                    timer: 1000
                });
                navigate('/');
            }
        })
    }

    return (
        <div className='bg-[#e2ff31] bg-opacity-50 flex flex-col lg:flex-row lg:gap-10 p-10 items-center'>
            <div className='lg:w-1/2 text-center lg:text-right p-2'>
                <h1 className='mt-10 text-2xl lg:text-5xl font-bold libreFranklin lg:mt-20 uppercase'>Newsletter Subscribe!!!</h1>
            </div>
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)} className="w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-1 flex flex-col gap-6 text-left">
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Name
                        </Typography>
                        <Input
                            {...register("name", { required: true })}
                            type="text"
                            size="lg"
                            placeholder="your name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.name && <span className="text-sm text-red-500">Name field is required</span>}
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Your Email
                        </Typography>
                        <Input
                            {...register("email", { required: true })}
                            type="email"
                            size="lg"
                            placeholder="name@mail.com"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.email && <span className="text-sm text-red-500">email field is required</span>}
                    </div>
                    <Input
                        type="submit"
                        value="Subscribe Now"
                        size="lg"
                        className="mt-4 !text-[#e2ff31] !bg-black !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </form>
            </div>
        </div>
    );
};

export default Newsletter;