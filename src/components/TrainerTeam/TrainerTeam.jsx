import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TrainerCardHome from './TrainerCardHome';
import useTrainers from '../../hooks/useTrainers';

const TrainerTeam = () => {
    const [trainers] = useTrainers();
    const limitedTrainers = trainers.slice(0, 3);;
    
    return (
        <div className='lg:max-w-7xl lg:mx-auto'>
            <div className='lg:max-w-5xl lg:mx-auto text-center items-center p-2'>
                <h1 className='mt-10 text-2xl lg:text-5xl font-bold libreFranklin lg:mt-20 uppercase'>Meet your Instructors</h1>
                <p className='text-gray-600 my-6'>We work with the best so you can feel your best. Our team of top instructors will empower you to reach all your fitness and wellness goals and enjoy the journey on the way.</p>
                <Link to='/trainers'>
                    <Button size="lg" variant="outlined" ripple={true}>ALL TRAINERS</Button>
                </Link>
            </div>
            <div className='mt-10 grid gap-2 md:grid-cols-2 lg:grid-cols-3 mb-20'>
                {
                    limitedTrainers.map((trainer) => <TrainerCardHome key={trainer._id} trainer={trainer}></TrainerCardHome>)
                }
            </div>
        </div>
    );
};

export default TrainerTeam;