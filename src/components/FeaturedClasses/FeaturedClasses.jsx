import React, { useEffect, useState } from 'react';
import useClassInfo from '../../hooks/useClassInfo';
import ClassCard from '../ClassCard/ClassCard';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import useTopClass from '../../hooks/useTopClass';
import useAuth from '../../hooks/useAuth';

const FeaturedClasses = () => {
    // const [myTop, setMyTop] = useState([]);
    const [topClasses] = useTopClass();
    // setMyTop(topClasses);
    // useEffect(() => {

    // }, [])
    // console.log(topClasses[0].classImg)
    // const {user} = useAuth();
    // if(user){

    // }
    return (
        <div>
            <div className='lg:max-w-5xl lg:mx-auto text-center items-center p-2'>
                <h1 className='my-10 text-2xl lg:text-5xl font-bold libreFranklin lg:mt-20 uppercase'>Featured Classes</h1>
            </div>
            <div className='mb-20 lg:max-w-7xl lg:mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    topClasses.map(classItem => <ClassCard classItem={classItem} key={classItem._id}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedClasses;