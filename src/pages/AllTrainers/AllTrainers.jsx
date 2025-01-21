import React from 'react';
import useTrainers from '../../hooks/useTrainers';
import TrainerCard from '../../components/TrainerCard/TrainerCard';

const AllTrainers = () => {
    const [trainers, loading] = useTrainers();
    console.log(trainers)
    return (
        <div>
            <div className='bg-[#e2ff31] bg-opacity-50 h-40 lg:h-48 flex justify-center items-center'>
                <h1 className='text-5xl font-bold'>Trainers</h1>
            </div>
            <div className='my-10 max-w-7xl mx-auto grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4 '>
                {
                    trainers.map(trainer => <TrainerCard key={trainer._id} trainer={trainer}></TrainerCard>)
                }
            </div>
        </div>
    );
};

export default AllTrainers;