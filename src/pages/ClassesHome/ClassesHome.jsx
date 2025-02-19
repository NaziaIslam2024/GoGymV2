import React, { useEffect, useState } from 'react';
import useClassInfo from '../../hooks/useClassInfo';
import ClassCard from '../../components/ClassCard/ClassCard';
import { Option, Select } from '@material-tailwind/react';

const ClassesHome = () => {
    const [classInfo] = useClassInfo();
    console.log(classInfo);
    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("default");
   
    useEffect(() => {
        setProducts(classInfo);
    }, [classInfo]);
    console.log(products)

    const handleSort = (order) => {
        setSortOrder(order);
        if (order === "default") {
            setProducts(classInfo); // Reset to original order
            return;
          }
        const sorted = [...products].sort((a, b) =>
            order === "asc" ? a.bookingCount - b.bookingCount : b.bookingCount - a.bookingCount
        );
        setProducts(sorted);
    };

    return (
        <div>
            <div className='bg-[#e2ff31] bg-opacity-50 h-40 lg:h-48 flex justify-center items-center'>
                <h1 className='text-5xl font-bold'>Training Classes</h1>
            </div>
            <div className='mt-10 text-center text-gray-700 border-t-blue-gray-200 focus:!border-t-gray-900'>
                <label htmlFor=""></label>
                <select
                    onChange={(e) => handleSort(e.target.value)}
                    value={sortOrder}
                    className="border-t-blue-gray-200 aria-[expanded=true]:border-t-primary"
                >
                    <option value="default">Sort by Booking count</option>
                    <option value="asc">Total Booking: Low to High</option>
                    <option value="desc">Total Booking: High to Low</option>
                </select>
            </div>
            <div className='mt-10 lg:max-w-7xl lg:mx-auto grid gap-2 md:grid-cols-2 lg:grid-cols-4 mb-20'>
                {
                    products.map(classItem => <ClassCard classItem={classItem} key={classItem._id}></ClassCard>)
                }
            </div>
        </div>
    );
};

export default ClassesHome;