import { Helmet } from 'react-helmet-async';
import loginImg from '../../assets/yoga2.jpg';
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signInUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        signInUser(data.email, data.password)
        .then(result => {
            const user = result.user;
            Swal.fire({
                title: "User Login Successful",
                showClass: {
                    popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
                `
                },
                hideClass: {
                    popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
                `
                }
            });
            // console.log(user)
            navigate(from, { replace: true });
        })
        //     .then(result => {
        //         const loggedUser = result.user;
        //         console.log(loggedUser);
        //         updateUserProfile(data.name, data.photoURL)
        //             .then(() => {
        //                 const userInfo = {
        //                     name: data.name,
        //                     email: data.email,
        //                     role: member
        //                 }
        //                 axiosPublic.post('/users', userInfo)
        //                     .then(res => {
        //                         if (res.data.insertedId) {
        //                             console.log("user created in database")
        //                             e.target.reset();
        //                             Swal.fire({
        //                                 position: 'top-end',
        //                                 icon: 'success',
        //                                 title: 'User created successfully.',
        //                                 showConfirmButton: false,
        //                                 timer: 1500
        //                             });
        //                             navigate('/');
        //                         }
        //                     })
        //             })
        //     })
        //     .catch(error => console.log(error))
    };

    return (
        <>
            <Helmet>
                <title>Go Gym | Login</title>
            </Helmet>
            <div className='bg-[#e2ff31] bg-opacity-50 p-10 '>
                <div className='bg-white flex flex-col lg:flex-row p-4 gap-x-10 rounded-bl-[200px]'>
                    <div className='w-full md:w-1/2 lg:w-2/3 flex '>
                        <img className='max-h-screen w-full object-cover rounded-tr-[200px] rounded-bl-[200px]' src={loginImg} alt="login page image" />
                        {/* <img className='max-h-screen' src={loginImg} alt="login page image" /> */}
                    </div>
                    <Card color="white" shadow={false} className="rounded-none md:w-1/2 lg:w-1/3  text-center items-center">
                        <Typography variant="h4" color="blue-gray" className='sora'>
                            Login
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            Your fitness journey awaits. Log in now!
                        </Typography>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                            <div className="mb-1 flex flex-col gap-6 text-left">
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
                                    {...register("password")}
                                    type="password"
                                    size="lg"
                                    placeholder="********"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                />
                            </div>
                            <Input
                                type="submit"
                                value="Login"
                                size="lg"
                                className="mt-4 text-[#e2ff31] !bg-black !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </form>
                        <Typography className="sora text-gray-500 mb-4 mt-8 text-center font-normal">
                            one-click login
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
                            Login with google
                        </Button>
                        <Typography color="gray" className="mt-6 mb-3 text-center font-normal">
                            New to our Go Gym?{" "}
                            <a href='/register' className="font-medium text-gray-900">
                                Sign Up
                            </a>
                        </Typography>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default Login;