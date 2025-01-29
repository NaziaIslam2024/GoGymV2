import { Card, Input, Textarea, Typography } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import useAuth from '../../../../hooks/useAuth';
import { Controller, useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useClassInfo from '../../../../hooks/useClassInfo';
import Swal from 'sweetalert2';
const optionsClassTime = [
    { value: '7am - 8am', label: '7am - 8am' },
    { value: '8am - 9am', label: '8am - 9am' },
    { value: '9am - 10am', label: '9am - 10am' },
    { value: '4pm - 5pm', label: '4pm - 5pm' },
    { value: '5pm - 6pm', label: '5pm - 6pm' },
    { value: '7pm - 8pm', label: '7pm - 8pm' },
    { value: '8pm - 9pm', label: '8pm - 9pm' },
    { value: '9pm - 10pm', label: '9pm - 10pm' },
    
];
const AddNewSlot = () => {
    // const [trainerInfo, setTrainerInfo] = useState([]);
    const { user } = useAuth();
    const [classDetails] = useClassInfo();
    // const [...classNameArray] = trainerInfo.skills.map(item => item.name)
    
    const axiosSecure = useAxiosSecure();

    const { data: trainerInfo = { skills: [], availableDay: [], availableTime: [] }, isPending } = useQuery({
        queryKey: ['trainerInfo', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/trainer/${user.email}`);
            return res.data;
        }
    })
    // console.log(trainerInfo)

    const checkboxOption = trainerInfo.skills;
    const optionsDay = trainerInfo.availableDay;
    
    const optionsTime = trainerInfo.availableTime;
    const [...classNameArray] = trainerInfo.skills.map(item => item)
    // console.log(classNameArray);
    const classOptions = classNameArray.map(skill => ({ value: skill, label: skill })) || [];
    const {control, register, reset, handleSubmit, watch, formState: { errors } } = useForm();
    // const additionalInfo = {
    //     name: trainerInfo.name,
    //     age: trainerInfo.age
    // }

    const onSubmit = async(data) => {
         
        const selectedDays = watch("selectDay");
        const selectedTime = watch("selectTime");
        const selectedClass = watch("selectTraningClass");
        
        // console.log("data------>")
        // console.log(data)
        const trainerId = trainerInfo._id;
        const trainerName = trainerInfo.name;
        const trainerEmail = trainerInfo.email;
        const age = trainerInfo.age;
        const bio = trainerInfo.bio;
        const classDurationHour = trainerInfo.classDurationHour;
        const experiences = trainerInfo.experiences;
        const photoUrl = trainerInfo.url;
        const selectDay = data.selectDay;
        const selectTime = data.selectTime;
        const selectTraningClass = data.selectTraningClass;
        // const final = { ...data, age, bio, experiences, classDurationHour, trainerId,trainerName,email,selectDay, photoUrl, selectTime, selectTraningClass };
        const newSlot = { trainerName, trainerId, trainerEmail, trainerClass: selectTraningClass.value, day: selectDay.value, slot: selectTime.value};
        // console.log("New Slot---->")
        // console.log(newSlot);

        // axiosSecure.post(`/add-new-slot`, newSlot)
        const classRes = await axiosSecure.post(`/add-new-slot`, newSlot);
        // console.log("class info has saved in db-->", classRes.data);
            if(classRes.data.insertedId){
                reset();
                Swal.fire(`New Slot added`);
            }
        // .then(res=>{
        //     if(res.data.insertedId>0){
        //         reset();
        //         Swal.fire({
        //             position: 'top-end',
        //             icon: 'success',
        //             title: 'New Slot added',
        //             showConfirmButton: false,
        //             timer: 1000
        //         });
        //     }
        // });
    }


    return (
        <div>
            <div className='relative bg-[#e2ff31] bg-opacity-50 h-40 lg:h-48 flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold'>Add new Slot</h1>
            </div>
            <Card className='max-w-5xl mx-auto my-6'>
                <form onSubmit={handleSubmit(onSubmit)} className="p-4">
                    <div className="mb-1 flex flex-col gap-6 text-left">
                        <div className='flex gap-2'>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Your Full Name
                                </Typography>
                                <Input
                                    {...register("trainerName")}
                                    type="text"
                                    size="lg"
                                    readOnly
                                    defaultValue={trainerInfo.name}
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                {/* {errors.trainerName && <span className="text-sm text-red-500">Name field is required</span>} */}
                            </div>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Your email
                                </Typography>
                                <Input
                                    {...register("email")}
                                    type="email"
                                    size="lg"
                                    readOnly
                                    defaultValue={user.email}
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                {/* {errors.email && <span className="text-sm text-red-500">email field is required and provide valid email address</span>} */}
                            </div>
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Your Photo Url
                                </Typography>
                                <Input
                                    {...register("photoUrl")}
                                    type="url"
                                    size="lg"
                                    readOnly
                                    defaultValue={trainerInfo.url} 
                                    placeholder="url of your photo"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                {/* {errors.photoUrl && <span className="text-sm text-red-500">url field is required</span>} */}
                            </div>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Your age
                                </Typography>
                                <Input
                                    {...register("age", { required: true })}
                                    type="number"
                                    value={trainerInfo.age} readOnly
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
                            Skills
                        </Typography>
                        <div className='grid grid-cols-4'>
                            {checkboxOption.map((option, index) => (
                                <label className='' key={index}>
                                    <input
                                        className='mr-1'
                                        type="checkbox"
                                        value={option}
                                        checked
                                        {...register("skills")}
                                    />
                                    {option}
                                </label>
                            ))}
                            {errors.skills && <span className="text-sm text-red-500">you have to select skills</span>}
                        </div>
                        <div className='flex gap-2'>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Total Class Hours
                                </Typography>
                                <Input
                                    {...register("classDuration")}
                                    type="number"
                                    size="lg"
                                    value={trainerInfo.classDurationHour}
                                    placeholder="Total Class Hours"
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
                                    {...register("experiences")}
                                    type="number"
                                    size="lg"
                                    value={trainerInfo.experiences}
                                    placeholder="Experiences (Year)"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                {errors.experiences && <span className="text-sm text-red-500">this field is required and should be number and greater than 0</span>}
                            </div>
                        </div>
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
                                            defaultValue={optionsDay}
                                            options={optionsDay}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        />
                                    )}
                                />
                            </div>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Available Time Slot
                                </Typography>
                                <Controller
                                    name="selectTime"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={optionsClassTime}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        />
                                    )}
                                />
                            </div>
                            <div className='flex-1'>
                                <Typography variant="h6" color="blue-gray" className="mb-3">
                                    Training Class
                                </Typography>
                                <Controller
                                    name="selectTraningClass"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={classOptions}
                                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <Input
                        type="submit"
                        value="Submit"
                        size="lg"
                        className="!my-6 !text-[#e2ff31] !bg-black !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </form>
            </Card>
        </div>
    );
};

export default AddNewSlot;