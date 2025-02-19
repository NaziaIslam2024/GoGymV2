import { Carousel, IconButton } from "@material-tailwind/react";
import './Testimonials.css';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic, { axiosPublic } from "../../hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { useState } from "react";
import Rating from "react-rating";
import { SiComma } from "react-icons/si";

const Testimonials = () => {
    const axiosPublic = useAxiosPublic();
    const { isPending, data: testi = [], refetch } = useQuery({
        queryKey: ['testi'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-testi`);
            return res.data;
        }
    })

    if (isPending) {
        return <h1>loading....</h1>
    }
    console.log("info-->", testi[0].member);
    return (
        <div className='lg:max-w-7xl lg:mx-auto bgImg min-h-[400px] pb-10'>
            <div className='lg:max-w-3xl lg:mx-auto p-1'>
                <h1 className='my-10 text-white text-2xl lg:text-5xl text-center font-bold libreFranklin uppercase'>Your feedback</h1>
            </div>
            {/* <div className="max-w-3xl mx-auto">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {
                        testi.map((item, i) => {
                            <SwiperSlide key={i}>{item.member}</SwiperSlide>
                        })
                    }
                    
                    
                </Swiper>
            </div> */}
            <div className="m-4 lg:w-1/3">
                <Swiper
                    modules={[Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                >
                    {testi.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white bg-opacity-40 shadow-lg rounded-lg p-5 text-center">
                                <div className="flex text-xl justify-center items-center mb-4">
                                    <SiComma /><SiComma />
                                </div>
                                <p className="text-lg italic">"{review.review.review}"</p>
                                <div className="flex items-end justify-end">
                                    <h3 className="font-semibold mt-3">- {review.member}</h3>
                                    {/* <h3 className="font-semibold mt-3">- {review.review.rating}</h3>
                                    <span><Rating emptySymbol="fa fa-star-o fa-2x" step={2} /></span> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </div>
    );
};

export default Testimonials;



function StarIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 text-yellow-700"
        >
            <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
            />
        </svg>
    );
}