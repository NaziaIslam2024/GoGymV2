import React, { useEffect, useState } from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

const useTopClass = () => {

    const [topClasses, setTopClasses] = useState([]);
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://go-gym-final-assignment-server.vercel.app/top-bookedClass')
        .then(res => res.json())
        .then(data => {
            setTopClasses(data);
                // setLoading(false);
        })

        }, [])
    return [topClasses]
   
    
};

export default useTopClass;