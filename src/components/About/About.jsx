import about from '../../assets/aboutus.png';

const About = () => {
    return (
        <div className='max-w-7xl mx-auto lg:flex lg:gap-5'>
            <div className='lg:w-1/2'>
                <img src={about} alt="" />
            </div>
            <div className='lg:w-1/2 lg:mx-auto text-center lg:text-left items-center p-2'>
                <h1 className='mt-10 text-2xl lg:text-5xl font-bold libreFranklin lg:mt-10 uppercase'>About Us - Your Fitness Companion</h1>
                <p className='text-gray-600 my-6 text-justify'>Our mission is to simplify your fitness goals by providing accurate activity tracking, detailed progress reports, and motivational features to keep you on track. Whether you're aiming to lose weight, build muscle, or simply lead a healthier life, we’ve got you covered.
                <br />
                With GO GYM, you can monitor your workouts, set realistic goals, and celebrate every milestone you achieve. Together, let’s turn small steps into big transformations and make fitness a sustainable part of your everyday life.
                <br />
                Start tracking. Stay motivated. Transform your life with GO GYM</p>
            </div>
        </div>
    );
};

export default About;