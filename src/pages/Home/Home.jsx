import React from 'react';
import Banner from '../../components/Banner/Banner';
import Features from '../../components/Features/Features';
import About from '../../components/About/About';
import TrainerTeam from '../../components/TrainerTeam/TrainerTeam';
import Testimonials from '../../components/Testimonials/Testimonials';
import ForumPosts from '../../components/ForumPosts/ForumPosts';
import Newsletter from '../../components/Newsletter/Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <About></About>
            <TrainerTeam></TrainerTeam>
            <Testimonials></Testimonials>
            <ForumPosts></ForumPosts>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;