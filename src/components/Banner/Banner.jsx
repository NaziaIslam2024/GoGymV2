import { Carousel, Typography, Button } from "@material-tailwind/react";
import slide2 from '../../assets/slider2.jpg';
import slide3 from '../../assets/slide3.jpg';
import slide1 from '../../assets/slide1.jpg';

const Banner = () => {
    return (
        <Carousel className="max-h-[700px] overflow-y-hidden">
            <div className="relative h-full w-full">
                <img
                    src={slide2}
                    alt="banner img"
                    className="w-full h-full object-fill"
                />
                 <div className="absolute inset-0 grid h-full w-full items-center lg:items-start lg:pt-40 bg-gray-900 bg-opacity-80">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <Typography
                            variant="h1"
                            color="white"
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            One App for all Things Fitness, Wellness & Beauty
                        </Typography>
                        <Typography
                            variant="lead"
                            className="mb-12 opacity-80 text-gray-500 text-base"
                        >
                           Welcome to Go Gym, where fitness meets excellence! Regular exercise is the cornerstone of a healthy lifestyle, boosting energy, improving mental well-being, and reducing the risk of chronic diseases. Our state-of-the-art facilities are designed to support your fitness journey, featuring top-notch equipment, spacious workout areas, and a variety of group classes tailored to all fitness levels. From personal training sessions with certified experts to modern amenities like saunas and recovery lounges, we’ve got everything you need to achieve your health and wellness goals. Join us today and take the first step toward a stronger, healthier, and happier you!
                        </Typography>
                        <div className="flex gap-2">
                            <Button size="lg" color="white" className="bg-[#e2ff31]">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
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
                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                            One App for all Things Fitness, Wellness & Beauty
                        </Typography>
                        <Typography
                            variant="lead"
                            color="white"
                            className="mb-12 opacity-80 text-gray-500 text-base"
                        >
                            From personal training sessions with certified experts to modern amenities like saunas and recovery lounges, we’ve got everything you need to achieve your health and wellness goals. Join us today and take the first step toward a stronger, healthier, and happier you!
                        </Typography>
                        <div className="flex justify-center gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
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