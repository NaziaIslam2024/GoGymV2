import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TrainerBooking = () => {
    const {data} = useLoaderData();
    console.log(data)
    return (
        <div>
            trainerBooking
        </div>
    );
};

export default TrainerBooking;