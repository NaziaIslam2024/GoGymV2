import './Register.css';
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const SignUp = () => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const { createUser, updateUser } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUser(data.name, data.url)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            role: "member"
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("user created in database")
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
                    })
            })
            .catch(error => console.log(error))
    };

    return (
        <>
            <Helmet>
                <title>Go Gym | Register</title>
            </Helmet>
            <Card color="transparent" shadow={true} className="my-10 max-w-xl mx-auto text-center items-center">
                <Typography variant="h4" color="blue-gray" className='sora'>
                    Sign Up
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Nice to meet you! Enter your details to register.
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
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
                            Photo URL
                        </Typography>
                        <Input
                            {...register("url", { required: true })}
                            type="url"
                            size="lg"
                            placeholder="profile pic url"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.url && <span className="text-sm text-red-500">photo url field is required</span>}
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
                        <Typography variant="h6" color="blue-gray" className="-mb-3">
                            Password
                        </Typography>
                        <Input
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                            })}
                            type="password"
                            size="lg"
                            placeholder="********"
                            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                            labelProps={{
                                className: "before:content-none after:content-none",
                            }}
                        />
                        {errors.password?.type === 'required' && <p className="text-sm text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-sm text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-sm text-red-600">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-sm text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                    </div>
                    <Input
                        type="submit"
                        value="Sign Up"
                        size="lg"
                        className="mt-4 text-[#e2ff31] !bg-black !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                </form>
                <Typography className="sora text-gray-500 mb-4 mt-8 text-center font-normal">
                    one-click signup
                </Typography>
                <Button
                    variant="outlined"
                    size="lg"
                    className="max-w-screen-lg sm:w-96 flex h-12 border-black bg-[#e2ff31] items-center justify-center gap-2"
                    fullWidth
                >
                    <img
                        src={`https://www.material-tailwind.com/logos/logo-google.png`}
                        alt="google"
                        className="h-6 w-6"
                    />{" "}
                    sign up with google
                </Button>
                <Typography color="gray" className="mt-6 mb-3 text-center font-normal">
                    Already have an account?{" "}
                    <a href='/login' className="font-medium text-gray-900">
                        Sign In
                    </a>
                </Typography>
            </Card>
        </>
    );
};

export default SignUp;