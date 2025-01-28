import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    const axiosSecure = useAxiosSecure();
    const {data: pendingTrainers = [], isPending} = useQuery({
        queryKey: ['pendingTrainers'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/applied-trainers`);
            // console.log(res.data);
            return res.data;
        }
    })
    return [pendingTrainers, isPending]
};

export default useUser;