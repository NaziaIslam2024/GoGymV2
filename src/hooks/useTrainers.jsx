import React, { useEffect, useState } from 'react';

const useTrainers = () => {
    const [trainers, setTrainers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/trainers')
        .then(res => res.json())
        .then(data => {
                setTrainers(data);
                setLoading(false);
        })
        }, [])
    return [trainers, loading]
};

export default useTrainers;