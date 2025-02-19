import { Carousel, Typography, Button } from "@material-tailwind/react";
import slide2 from '../../assets/slider2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide1 from '../../assets/slide1.jpg';
import { Link } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";

const Banner = () => {
    return (
        <Carousel className="max-h-[650px] max-w-7xl mx-auto overflow-y-hidden">
            <div className="relative h-full w-full">
                <img
                    src={slide2}
                    alt="banner img"
                    className="w-full h-full object-fill"
                />
                <div className="absolute place-items-center inset-0 grid h-full w-full items-center pt-4 lg:pt-0 bg-gray-900 bg-opacity-80">
                    <div className="w-3/4 md:w-2/4 flex flex-col items-center text-center">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-xl md:text-4xl lg:text-5xl"
                        >
                            One App for all Things Fitness, Wellness & Beauty
                        </Typography>
                        <Typography
                            variant="lead"
                            className="mb-0 lg:mb-4 opacity-80 text-gray-500 text-sm hidden md:block"
                        >
                            Welcome to Go Gym, where fitness meets excellence! Regular exercise is the cornerstone of a healthy lifestyle, boosting energy, improving mental well-being, and reducing the risk of chronic diseases. Our state-of-the-art facilities are designed to support your fitness journey, featuring top-notch equipment, spacious workout areas, and a variety of group classes tailored to all fitness levels. From personal training sessions with certified experts to modern amenities like saunas and recovery lounges, we’ve got everything you need to achieve your health and wellness goals. Join us today and take the first step toward a stronger, healthier, and happier you!
                        </Typography>
                        <div className="flex gap-2">
                            <Link to='/training-classes'>
                                <Button color="white" className="bg-[#e2ff31] flex items-center md:text-lg">
                                    Explore Classes <FaArrowTrendUp className="ml-2"/>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={slide1} alt="image 2"
                    className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/50">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                            variant="h1"
                            color="white"
                            className="md:mb-4 text-xl md:text-4xl lg:text-5xl"
                        >
                            One App for all Things Fitness, Wellness & Beauty
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="md:mb-12 text-sm opacity-80 text-gray-500"
                        >
                            From personal training sessions with certified experts to modern amenities like saunas and recovery lounges, we’ve got everything you need to achieve your health and wellness goals. Join us today and take the first step toward a stronger, healthier, and happier you!
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white" className="flex bg-[#e2ff31]">
                                Explore Classes <FaArrowTrendUp />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative h-full w-full">
                <img
                    src={slide3}
                    alt="image 3"
                    className="h-full w-full object-fill"
                />
            </div>
        </Carousel>
    );
};

export default Banner;