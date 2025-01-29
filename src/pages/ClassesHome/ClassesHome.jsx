import React from 'react';
import useClassInfo from '../../hooks/useClassInfo';
import ClassCard from '../../components/ClassCard/ClassCard';

const ClassesHome = () => {
    const [classInfo] = useClassInfo();
    console.log(classInfo);
    
    return (
        <div>
             <div className='bg-[#e2ff31] bg-opacity-50 h-40 lg:h-48 flex justify-center items-center'>
                <h1 className='text-5xl font-bold'>Classes</h1>
            </div>
            <div className='mt-10 grid gap-2 md:grid-cols-2 lg:grid-cols-3 lg:ml-8 mb-20'>
                {
                    classInfo.map(classItem => <ClassCard classItem={classItem} key={classItem._id}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default ClassesHome;