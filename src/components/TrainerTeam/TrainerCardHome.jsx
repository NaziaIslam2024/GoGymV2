import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Chip,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TrainerCardHome = ({ trainer }) => {
    console.log(trainer)
    const { _id, name, category, url, bio, skills } = trainer;
    const truncateBio = bio.split(" ").slice(0, 20).join(" ") + "...";
    return (
        <div>
            <Card className="w-96 h-[500px]">
                <CardHeader floated={false} className="h-56">
                    <img className="w-full h-full" src={url} alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-left">
                    <Typography variant="h4" color="blue-gray" className="mb-2 flex justify-between items-center">
                        <span>{name}</span>

                    </Typography>
                    <Typography variant="" color="blue-gray" className="mb-2 flex justify-between items-center">
                        {skills}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        {truncateBio}
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Link to={`/trainers/${_id}`} className="inline-block">
                        <Button size="sm" variant="text" className="flex items-center gap-2">
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
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
                </CardFooter>
            </Card>
        </div>
    );
};

export default TrainerCardHome;