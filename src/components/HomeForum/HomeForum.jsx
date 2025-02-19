import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import dd from '../../assets/trainers/Instructor-Bianca.png'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Chip,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const HomeForum = () => {
    const axiosPublic = useAxiosPublic();
    const { data: blogDetails = [] } = useQuery({
        queryKey: ['blogDetails'],
        queryFn: async () => {
            const res = await axiosPublic.get('/four-blog');
            console.log(res.data);
            return res.data;
        }
    })

    return (
        <div className=' lg:mx-auto text-center items-center p-2 mt-10 mb-10'>
            <div className='lg:max-w-5xl lg:mx-auto text-center items-center p-2'>
                <h1 className='mt-10 text-2xl lg:text-5xl font-bold libreFranklin lg:my-10 uppercase'>Go GYm Community Forum</h1>
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                {
                    blogDetails.slice().reverse().map((item, index) => 
                        <div key={index} className='flex'>
                            <Card className='relative w-96'>
                                <div>
                                    <img className='w-full h-[300px]' src={item.blogUrl} alt="blog" />
                                </div>
                                <div className='w-full h-full absolute bg-black bg-opacity-40 p-10'>
                                    <h1 className='text-white text-xl mb-8'>{item.blogTitle}</h1>
                                    <Link to={`/single-blog-detail/${item._id}`} className="inline-block">
                                        <Button variant="text" color='white' className="!border flex items-center gap-2">
                                            Learn More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                />
                                            </svg>
                                        </Button>
                                    </Link>
                                </div>
                            </Card>
                        </div>
                    )
                }
                {/* <div className=''>
                    <Card className='w-80'>
                        <div>
                            <img className='w-full h-[300px]' src={dd} alt="blog" />
                        </div>
                        <div></div>

                    </Card>
                </div>
                <div className=''>
                    <Card className='w-9'>
                        <div>
                            <img className='w-full h-[300px]' src={dd} alt="blog" />
                        </div>
                        <div></div>

                    </Card>
                </div>
                <div className=''>
                    <Card className='w-96'>
                        <div>
                            <img className='w-full h-[300px]' src={dd} alt="blog" />
                        </div>
                        <div></div>

                    </Card>
                </div>
                <div className=''>
                    <Card className='w-96'>
                        <div>
                            <img className='w-full h-[300px]' src={dd} alt="blog" />
                        </div>
                        <div></div>

                    </Card>
                </div> */}
            </div>
        </div>
    );
};

export default HomeForum;