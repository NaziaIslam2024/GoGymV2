import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import { Input, Typography } from '@material-tailwind/react';
import Swal from 'sweetalert2';

const MemberProfile = () => {
    const { user } = useAuth();
    // console.log(user.metadata.lastSignInTime)
    const axiosSecure = useAxiosSecure();

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)

        // const blogDetails = { ...data, userType: isRole, userInfo: user.email, postingDate: new Date(), vote: 0 }
        // console.log(blogDetails)
        const res = await axiosSecure.put(`/update-member-profile/${user.email}`, data);
        console.log(res.data)
        // if (res.data.modifiedCount > 0) {
        //     reset();
        //     Swal.fire({
        //         position: 'top-end',
        //         icon: 'success',
        //         title: 'Profile updated successfully',
        //         showConfirmButton: false,
        //         timer: 1000
        //     });
        // }
    }
    return (
        <div className='mt-20 max-w-2xl mx-auto'>
            <div className='max-w-5xl mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-4'>
                        <Typography variant="h6" color="blue-gray" className="mb-3">
                            Member Name: 
                        </Typography>
                        <Input
                            {...register("name", { required: true })}
                            type="text"
                            size="lg"
                            placeholder="Name"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.name && <span className="text-sm text-red-500">this field is required</span>}
                        <Typography variant="h6" color="blue-gray" className="mb-3">
                            Profile Photo Url: 
                        </Typography>
                        <Input
                            {...register("url", { required: true })}
                            type="url"
                            size="lg"
                            placeholder="URL"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.url && <span className="text-sm text-red-500">this field is required</span>}
                        
                        <Typography variant="h6" color="blue-gray" className="mb-3">
                           Email address: 
                        </Typography>
                        <Input
                            {...register("email")}
                            type="email"
                            size="lg"
                            readOnly
                            value={user.email}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="mb-3">
                           Last log in info: 
                        </Typography>
                        <Input
                            {...register("lastLogin")}
                            type="text"
                            size="lg"
                            readOnly
                            value={user.metadata.lastSignInTime}
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                    </div>
                    <Input

                        type="submit"
                        value="Update"
                        size="lg"
                        className="!my-6 !text-[#e2ff31] !bg-black !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </form>
            </div>
        </div>
    );
};

export default MemberProfile;