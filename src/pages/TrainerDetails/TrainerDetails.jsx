import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardFooter, Chip, List, ListItem, Tooltip, Typography } from '@material-tailwind/react';
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import buttonImg from '../../assets/bigLogo.png';
import trainerBG from '../../assets/trainerBG.png';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAuth from '../../hooks/useAuth';

const TrainerDetails = () => {
    const {user} = useAuth();
    const trainer = useLoaderData();
    console.log(trainer.data)
    const { name, url, skills, bio, experiences, socialIcons, _id, availableDay, availableTime, slots } = trainer.data;
    const [slotInfo, setSlotInfo] = useState([]);
    const axiosPublic = useAxiosPublic();

    const { data: trainerSlots = [] } = useQuery({
        queryKey: ['trainerSlots'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-slots/${_id}`);
            return res.data;  
        }
    })
    // if(isPending){
    //     return <h1>loading....</h1>
    // }
    // console.log(trainer.data);
    console.log("info-->", trainerSlots);
    return (
        <div>
            <div className='relative bg-[#e2ff31] bg-opacity-50 h-40 lg:h-48 flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold'>{name}</h1>
                <div className='bg-white p-2 absolute rounded-full w-[200px] top-28 z-10 lg:top-32'>
                    <img className='rounded-full' src={url} alt="" />
                </div>
            </div>
            <div className='mt-36 text-gray-600 p-2 md:p-4 lg:max-w-5xl lg:mx-auto'>
                {/* <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Like">
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
                    }
                </CardFooter> */}
                <p>{bio}</p>
                <div className='flex mt-8 mx-10 flex-col-reverse lg:flex-row lg:justify-evenly'>
                    <div>
                        <Typography variant="p" color="blue-gray" className="mb-2 flex justify-between items-center" textGradient>
                            Experiences: {experiences} years
                        </Typography>
                        <Typography variant="p" color="blue-gray" className="mb-2 space-y-2" textGradient>
                            <span>Skills: </span>
                            {
                                skills.map(item => <Chip variant="outlined" value={item} />)
                            }
                        </Typography>
                        {/* <CardFooter className="flex justify-center gap-7 pt-2">
                            <Tooltip content="Like">
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
                            }
                        </CardFooter> */}
                    </div>
                    <div>
                        <h3>Available Time Slots</h3>
                        <div className="w-96">
                            <List>
                                {
                                    trainerSlots.map(item => <Link to={`/trainer-booking/${item._id}`} className="bg-blue-100 text-initial">
                                        <ListItem>{item.trainerClass} -- {item.day} -- {item.slot}--</ListItem>
                                    </Link>)
                                }
                            </List>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative flex justify-center max-w-5xl mx-auto mb-20 h-[350px]'>
                <img src={trainerBG} alt="" />
                <div className='absolute top-1/2'>
                    <Link to='/be-a-trainer'>
                        <Button
                            size="lg"
                            className="bg-[#e2ff31] text-lg text-black group relative flex items-center gap-3 overflow-hidden pr-[72px]"
                        >
                            Be a Trainer
                            <span className="absolute right-0 grid h-full w-12 place-items-center bg-[#e2ff31] transition-colors group-hover:bg-lime-600">
                                <img src={buttonImg} alt="metamask" className="h-12 w-12" />
                            </span>
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrainerDetails;