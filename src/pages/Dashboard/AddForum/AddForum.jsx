import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useRole from '../../../hooks/useRole';
import { Input, Textarea, Typography } from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const AddForum = () => {
    const [isRole] = useRole();
    const { user } = useAuth();
    console.log(isRole)
    const axiosSecure = useAxiosSecure();

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data)

        const blogDetails = { ...data, userType: isRole, userInfo: user.email, postingDate: new Date(), vote:0 }
        console.log(blogDetails)
        const res = await axiosSecure.post('/blogs', blogDetails);
        if (res.data.insertedId) {
            reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Blog posted successfully',
                showConfirmButton: false,
                timer: 1000
            });
        }
    }

    return (
        <div>
            <div className='relative bg-[#e2ff31] bg-opacity-50 h-40 lg:h-48 flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold'>Add new post</h1>
            </div>
            <div className='max-w-5xl mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-4'>
                        <Typography variant="h6" color="blue-gray" className="mb-3">
                            Image url for your blog
                        </Typography>
                        <Input
                            {...register("blogUrl", { required: true })}
                            type="url"
                            size="lg"
                            placeholder="Image url for your blog"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        <Typography variant="h6" color="blue-gray" className="mb-3">
                            Blog title
                        </Typography>
                        <Input
                            {...register("blogTitle", { required: true })}
                            type="text"
                            size="lg"
                            placeholder="Image url for your blog"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.blogTitle && <span className="text-sm text-red-500">this field is required and should be number and greater than 0</span>}
                        <Textarea
                            {...register("myBlog", { required: true })}
                            label="Message" />
                        {errors.myBlog && <span className="text-sm text-red-500">this field is required and should be number and greater than 0</span>}
                    </div>
                    <Input

                        type="submit"
                        value="Add Blog"
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

export default AddForum;