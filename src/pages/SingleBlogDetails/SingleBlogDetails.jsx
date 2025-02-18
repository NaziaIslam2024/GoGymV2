import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";

const SingleBlogDetails = () => {
    const [blogerName, setBlogerName] = useState("");
    const axiosSecure = useAxiosSecure();
    const singleBlog = useLoaderData();
    // console.log(singleBlog.data)
    const { blogTitle, blogUrl, myBlog, postingDate, userInfo, userType, _id } = singleBlog.data;
    const res = axiosSecure.get(`/bloger-email/${userInfo}`)
        .then(res => {
            // console.log(res.data)
            setBlogerName(res.data);
        })
        
        const handleUpVote = (id) => {
            // document.getElementById('upVote').disabled = true;
            document.getElementById("upVote").addEventListener("click", function() {
                this.disabled = true; // Disable after clicking
                this.innerText = "up"; // Change text
                console.log("UP",id)
            });
            
        }

        const handleDownVote = () => {

        }
    return (
        <div className='w-full max-w-5xl mx-auto mt-20 mb-10'>
            <h1 className='text-5xl font-bold text-gray-700 mb-20 text-center'>{blogTitle}</h1>
            <div className='flex justify-between items-center text-sm text-gray-500 mb-8'>
                <div className=''>
                    <p>{userType}</p>
                    <p>{blogerName}</p>
                </div>
                <div className='border flex gap-4 text-gray-900 items-center'>
                    <button className='p-2' id='upVote' onClick={() => handleUpVote(_id)}><SlLike /></button>
                    <p className='border-x-2 p-2'>{0}</p>
                    <button className='p-2' id='downVote' onClick={() => handleDownVote(_id)}><SlDislike /></button>
                </div>
                <p>{postingDate}</p>
            </div>

            <div className='mb-10'>
                <img className='rounded-3xl' src={blogUrl} alt="" />
            </div>
            <p>{myBlog}</p>
        </div>
    );
};

export default SingleBlogDetails;