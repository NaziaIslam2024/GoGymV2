import { Button, Input, Popover, PopoverHandler, Select, Typography } from '@material-tailwind/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_Image_hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddClass = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async(data) => {
        console.log(data);
        //upload image in imagebb and get the url
        const imageFile = { image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        });
        if(res.data.success){
            const classInfo = {
                name: data.className,
                details: data.classDetails,
                bookingCount: 0,
                classImg: res.data.data.display_url
            }
            const classRes = await axiosSecure.post('/classInfo', classInfo);
            console.log("class info has saved in db-->", classRes.data);
            if(classRes.data.insertedId){
                reset();
                Swal.fire(`${data.className} class has added`);
            }


        }
        console.log(res.data);

    }
    return (
        <div>
            <div className='my-10 flex justify-center items-center'>
                <h1 className='text-2xl font-bold'>Add Class Info</h1>
            </div>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl  mx-auto">
                    <div className="flex flex-col mt-8">
                        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 font-medium"
                                >
                                    Class Name
                                </Typography>
                                <Input
                                    {...register("className", { required: true })}
                                    type="text"
                                    size="lg"
                                    placeholder="Class name"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                {errors.className && <span className="text-sm text-red-500">photo url field is required</span>}
                        
                            </div>
                        </div>
                        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 font-medium"
                                >
                                    Details
                                </Typography>
                                <Input
                                    {...register("classDetails", { required: true })}
                                    type="text"
                                    size="lg"
                                    placeholder="Class description"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                                {errors.classDetails && <span className="text-sm text-red-500">photo url field is required</span>}
                        
                            </div>
                        </div>
                        <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 font-medium"
                                >
                                    Image Url
                                </Typography>
                                <Input
                                    {...register("image", { required: true })}  
                                    type="file"
                                    className="file-input w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200 file:mr-5 file:py-1 file:px-6
                                            file:rounded-full file:border-0
                                            file:text-sm file:font-medium
                                            file:bg-[#f3ffb7] file:text-black
                                            hover:file:cursor-pointer hover:file:bg-amber-50
                                            hover:file:text-amber-700"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    size="lg"
                                    placeholder="Choose image for class cover photo"

                                />
                                {errors.image && <span className="text-sm text-red-500">photo url field is required</span>}
                            </div>
                        </div>
                        {/* <div className="mb-6 flex flex-col items-end gap-4 md:flex-row">
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 font-medium"
                                >
                                    Class Name
                                </Typography>
                                <Input
                                    size="lg"
                                    placeholder="Emma"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                                />
                            </div>
                        </div>
                        <div className="mb-6 flex flex-col gap-4 md:flex-row">
                            <div className="w-full">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="mb-2 font-medium"
                                >
                                    I&apos;m
                                </Typography>
                                <Select
                                    size="lg"
                                    labelProps={{
                                        className: "hidden",
                                    }}
                                    className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
                                >
                                    <Option>Male</Option>
                                    <Option>Female</Option>
                                </Select>
                            </div>
                        </div> */}
                        <div className="flex flex-col items-end gap-4 md:flex-row">
                            <div className="w-full">
                                <Input 
                                    type='submit'
                                    className="!text-[#e2ff31] !bg-black !border-t-blue-gray-200 focus:!border-t-gray-900" 
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    value="Add Class"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddClass;