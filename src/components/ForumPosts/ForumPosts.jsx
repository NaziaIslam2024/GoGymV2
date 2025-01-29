import React from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Chip,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';
const ForumPosts = () => {
    const axiosPublic = useAxiosPublic();
    const { data: blogDetails = [] } = useQuery({
        queryKey: ['blogDetails'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all-blog');
            console.log(res.data);
            return res.data;
        }
    })
    // const truncateDEtails =  blogDetails.myBlog.split(" ").slice(0, 20).join(" ") + "...";
    return (
        <div className='lg:max-w-5xl lg:mx-auto text-center items-center p-2 mb-10'>
            <div className='lg:max-w-5xl lg:mx-auto text-center items-center p-2'>
                <h1 className='mt-10 text-2xl lg:text-5xl libreFranklin lg:my-10 uppercase'>Go GYm Community Forum</h1>
            </div>
            <div className='grid grid-cols-1 gap-3'>
                {
                    blogDetails.map(item =>
                        <Card className="w-full max-w-5xl flex-row">
                            <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-2/5 shrink-0 rounded-r-none"
                            >
                                <img
                                    src={item.blogUrl}
                                    alt="card-image"
                                    className="h-full w-full object-cover"
                                />
                            </CardHeader>
                            <CardBody className='text-left'>
                                <div className='flex'>
                                    <Typography variant="h4" color="blue-gray" className="mb-2">
                                        {item.blogTitle}
                                    </Typography>
                                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                                        <Chip variant="outlined" value={item.userType} className="rounded-full" />
                                    </Typography>
                                </div>
                                <Typography color="gray" className="mb-8 font-normal">
                                   {item.myBlog.split(" ").slice(0, 20).join(" ") + "..."}
                                </Typography>
                                <Link to={`/single-blog-detail/${item._id}`} className="inline-block">
                                    <Button variant="text" className="flex items-center gap-2">
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
                            </CardBody>
                        </Card>
                    )
                }
            </div>
        </div>
    );
};

export default ForumPosts;