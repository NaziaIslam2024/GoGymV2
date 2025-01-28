import React, { useEffect, useState } from 'react';

const useTrainers = () => {
    
    const [trainers, setTrainers] = useState([]);
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://go-gym-final-assignment-server.vercel.app/trainers')
        .then(res => res.json())
        .then(data => {
                setTrainers(data);
                // setLoading(false);
        })
        }, [])
    return [trainers]
};

export default useTrainers;