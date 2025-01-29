import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    // baseURL: 'https://go-gym-final-assignment-server.vercel.app'
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const {logout} = useAuth();
    // request interceptor to add authorization header for every secure call to teh api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log("--> request stopped by axios interceptors", token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      }, async (error) => {
        const status = error.response.status;
        // console.log('error status -->', status)
        if(status === 401 || status === 403){
            await logout();
            navigate('/login');
        }
        return Promise.reject(error);
    });


    return axiosSecure;
};

export default useAxiosSecure;