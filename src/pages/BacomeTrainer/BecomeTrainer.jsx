import { Card, Input, Textarea, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import useAxiosSecure, { axiosSecure } from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useClassInfo from '../../hooks/useClassInfo';
import { axiosPublic } from '../../hooks/useAxiosPublic';

const optionsDay = [
    { value: 'Friday', label: 'Friday' },
    { value: 'Saturday', label: 'Saturday' },
    { value: 'Sunday', label: 'Sunday' },
    { value: 'Monday', label: 'Monday' },
    { value: 'Tuesday', label: 'Tuesday' },
    { value: 'Wednesday', label: 'Wednesday' },
    { value: 'Thursday', label: 'Thursday' },
];
const optionsTime = [
    { value: '7am - 8am', label: '7am - 8am' },
    { value: '8am - 9am', label: '8am - 9am' },
    { value: '9am - 10am', label: '9am - 10am' },
    { value: '4pm - 5pm', label: '4pm - 5pm' },
    { value: '5pm - 6pm', label: '5pm - 6pm' },
    { value: '7pm - 8pm', label: '7pm - 8pm' },
    { value: '8pm - 9pm', label: '8pm - 9pm' },
    { value: '9pm - 10pm', label: '9pm - 10pm' },
];

const BecomeTrainer = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [gymClass] = useClassInfo();
    console.log(gymClass)
    const nameOfClass = gymClass.map(item => item.name)
    console.log(nameOfClass)
    const { control, register, handleSubmit, reset, formState: { errors }, watch } = useForm({});
    const onSubmit = data => {
        const selectedValues = watch("skills");
        const role = "pending";
        const trainerInfo = { ...data, role };
        console.log(selectedValues);

        axiosPublic.put(`/be-a-trainer/${user.email}`, trainerInfo)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Application Submission successful',
                        showConfirmButton: false,
                        timer: 1000
                    });
                }
            })
    }

    return (
        <div>
            <div className='relative bg-[#e2ff31] bg-opacity-50 h-40 lg:h-48 flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold'>Apply for Trainer Position</h1>
            </div>
            <Card className='max-w-5xl mx-auto my-6'>
                <form onSubmit={handleSubmit(onSubmit)} className="m-4">
                    <div className="mb-1 flex flex-col gap-6 text-left">
                        <div className='flex gap-2'>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Your Full Name
                                </Typography>
                                <Input
                                    {...register("name", { required: true })}
                                    type="text"
                                    size="lg"
                                    placeholder="your full name"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                {errors.name && <span className="text-sm text-red-500">Name field is required</span>}
                            </div>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Your email
                                </Typography>
                                <Input
                                    {...register("email", { required: true })}
                                    type="email"
                                    size="lg"
                                    readOnly
                                    value={user.email}
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                {errors.email && <span className="text-sm text-red-500">email field is required and provide valid email address</span>}
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Your Photo Url
                                </Typography>
                                <Input
                                    {...register("photoUrl", { required: true })}
                                    type="url"
                                    size="lg"
                                    placeholder="url of your photo"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                {errors.photoUrl && <span className="text-sm text-red-500">url field is required</span>}
                            </div>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Your age
                                </Typography>
                                <Input
                                    {...register("age", { required: true })}
                                    type="number"
                                    min={18}
                                    size="lg"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                {errors.age && <span className="text-sm text-red-500">age field is required and should be number and greater than 18</span>}
                            </div>
                        </div>
                        <Typography variant="h6" color="blue-gray" className="">
                            Classes
                        </Typography>
                        {/* <div className='grid grid-cols-4'>
                            {nameOfClass.map((option, index) => (
                                <label className='' key={index}>
                                    <input
                                        className='mr-1'
                                        type="checkbox"
                                        value={option}
                                        {...register("skills", { required: true })}
                                    />
                                    {option}
                                </label>
                            ))}
                            {errors.skills && <span className="text-sm text-red-500">you have to select skills</span>}
                        </div> */}
                        <div className='grid grid-cols-4'>
                            {nameOfClass.map((option, index) => (
                                <label className='' key={index}>
                                    <input
                                        className='mr-1'
                                        type="radio"
                                        value={option}
                                        {...register("skills", { required: true })}
                                    />
                                    {option}
                                </label>
                            ))}
                            {errors.skills && <span className="text-sm text-red-500">you have to select skills</span>}
                        </div>

                        {/* <div className="flex gap-10">
                            <Radio {...register("skills", { required: true })} type="radio" value="HIIT" color="green" ripple={true} />
                            <Radio {...register("skills", { required: true })} type="radio" value="Y" color="green" ripple={true} />
                            
                        </div> */}

                        <div className='flex gap-2'>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Select Available Days
                                </Typography>
                                <Controller
                                    name="selectDay"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isMulti
                                            // defaultValue={selectedOption}
                                            // onChange={setSelectedOption}
                                            options={optionsDay}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        />
                                    )}
                                />
                            </div>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Select Available Time
                                </Typography>
                                <Controller
                                    name="selectTime"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            isMulti
                                            // defaultValue={selectedOption}
                                            // onChange={setSelectedOption}
                                            options={optionsTime}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        />
                                    )}
                                />
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Class Duration
                                </Typography>
                                <Input
                                    {...register("classDuration", { required: true })}
                                    type="number"
                                    size="lg"
                                    min={1}
                                    placeholder="Class Duration (Hour)"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                {errors.classDuration && <span className="text-sm text-red-500">this field is required and should be number and greater than 0</span>}
                            </div>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Years of Experiences
                                </Typography>
                                <Input
                                    {...register("experiences", { required: true })}
                                    type="number"
                                    size="lg"
                                    min={1}
                                    placeholder="Experiences (Year)"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                {errors.experiences && <span className="text-sm text-red-500">this field is required and should be number and greater than 0</span>}
                            </div>
                        </div>
                        <Textarea
                            {...register("bio", { required: true })}
                            size="md" label="Biography" />
                        {errors.bio && <span className="text-sm text-red-500">this field is required</span>}
                    </div>
                    <Input
                        type="submit"
                        value="Submit"
                        size="lg"
                        className="my-4 !text-[#e2ff31] !bg-black !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </form>
            </Card>
        </div>
    );
};

export default BecomeTrainer;