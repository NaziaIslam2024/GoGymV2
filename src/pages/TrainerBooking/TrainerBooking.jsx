import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ClassCard from '../../components/ClassCard/ClassCard';
import { axiosPublic } from '../../hooks/useAxiosPublic';
import useClassInfo from '../../hooks/useClassInfo';

const TrainerBooking = () => {
    const { data } = useLoaderData();
    console.log(data);
    const allClasses = useClassInfo();
    console.log(allClasses)

    const filteredClasses = allClasses[0].filter(item => data.skills.includes(item.name))
    console.log(filteredClasses)
    return (
        <div>
            <div className='relative bg-[#e2ff31] bg-opacity-50 h-40 lg:h-48 flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold'>Available Classes of {data.name}</h1>
            </div>
            <div className='grid grid-cols-3 m-10'>
                {
                    filteredClasses.map(classItem => <ClassCard key={classItem._id} classItem={classItem}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default TrainerBooking;