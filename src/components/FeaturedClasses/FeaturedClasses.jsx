import React, { useEffect, useState } from 'react';
import useClassInfo from '../../hooks/useClassInfo';
import ClassCard from '../ClassCard/ClassCard';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import useTopClass from '../../hooks/useTopClass';
import useAuth from '../../hooks/useAuth';

const FeaturedClasses = () => {
    const [topClasses] = useTopClass();

    return (
        <div>
            <div className='lg:max-w-7xl lg:mx-auto text-center items-center p-2'>
                <h1 className='my-10 text-2xl lg:text-5xl font-bold libreFranklin lg:mt-20 uppercase'>Featured Classes</h1>
            </div>
            <div className="max-w-7xl lg:mx-auto mb-20">
                <div className=' grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-content-center'>
                    {
                        topClasses.slice(0, 4).map(classItem => <ClassCard classItem={classItem} key={classItem._id}></ClassCard>)
                    }
                </div>
                <div className=" flex justify-center gap-4 mt-4">
                    {
                        topClasses.slice(4).map(classItem => <ClassCard classItem={classItem} key={classItem._id}></ClassCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeaturedClasses;