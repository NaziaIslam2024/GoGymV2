import { Button } from '@material-tailwind/react';
import React from 'react';
import useAuth from '../hooks/useAuth';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SocialLogin = ({title}) => {
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const {googleSignIn} = useAuth();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    
    const handleGoogleSignUp = () => {
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                role: "member"
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                // Swal.fire('Login successful')
                navigate(from, { replace: true });
            })
        })
    } 

    return (
        <Button
            onClick={handleGoogleSignUp}
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
            {title} with google
        </Button>
    );
};

export default SocialLogin;