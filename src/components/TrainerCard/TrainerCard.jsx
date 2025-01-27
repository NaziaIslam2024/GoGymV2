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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { FaCalendarDays } from "react-icons/fa6";
import { LuAlarmClock } from "react-icons/lu";

const TrainerCard = ({ trainer }) => {
    console.log(trainer._id);
    const { name, skills, url, bio, experiences, socialIcons, _id, availableDay, availableTime} = trainer;
    const truncateBio = bio.split(" ").slice(0, 20).join(" ") + "...";
    return (
        <Card className="w-96">
            <CardHeader floated={false} className="h-80">
                <img className="w-full h-full" src={url} alt="profile-picture" />
            </CardHeader>
            <CardBody className="text-left">
                <Typography variant="h4" color="blue-gray" className="mb-2 flex justify-between items-center">
                    <span>{name}</span>
                </Typography>
                <Typography variant="h4" color="blue-gray" className="mb-2 flex flex-col space-y-2">
                   
                    {
                        skills.map(item => <Chip variant="outlined"  value={item} /> )
                    }
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    {truncateBio}
                </Typography>
                <Typography color="blue-gray" className="font-medium" textGradient>
                    {experiences} years of experiences
                </Typography>
                <div className="flex gap-6 mt-3 items-center">
                    <Typography className="text-black" textGradient>
                        {
                            availableDay.map(time => <li className="flex">
                                <FaCalendarDays className="text-lg mr-2 text-blue-gray-200" />
                                {time.value}
                            </li>)
                        }
                    </Typography>
                    <Typography className="text-black" textGradient>
                        {
                            availableTime.map(time => <li className="flex">
                                <LuAlarmClock className="text-lg mr-2 text-blue-gray-200" />
                                {time.value}
                            </li>)
                        }
                    </Typography>
                </div>
            </CardBody>
            <CardFooter className="flex justify-center gap-7 pt-2">
                {/* <Tooltip content="Like">
                    <Typography
                        as="a"
                        href={socialIcons.facebook}
                        variant="lead"
                        color="blue"
                        textGradient
                    >
                        <FontAwesomeIcon icon={faFacebook} className="text-black text-2xl" />
                    </Typography>
                </Tooltip>
                {socialIcons.twitter &&
                    <Tooltip content="Follow">
                        <Typography
                            as="a"
                            href={socialIcons.twitter}
                            variant="lead"
                            color="light-blue"
                            textGradient
                        >
                            <FontAwesomeIcon icon={faTwitter} className="text-black text-2xl" />
                        </Typography>
                    </Tooltip>
                }
                {socialIcons.instagram &&
                    <Tooltip content="Follow">
                        <Typography
                            as="a"
                            href={socialIcons.instagram}
                            variant="lead"
                            color="purple"
                            textGradient
                        >
                            <FontAwesomeIcon icon={faInstagram} className="text-black text-2xl" />
                        </Typography>
                    </Tooltip>
                }
                {socialIcons.linkedin &&
                    <Tooltip content="Follow">
                        <Typography
                            as="a"
                            href={socialIcons.linkedin}
                            variant="lead"
                            color="purple"
                            textGradient
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-black text-2xl" />
                        </Typography>
                    </Tooltip>
                } */}
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
    );
};

export default TrainerCard;