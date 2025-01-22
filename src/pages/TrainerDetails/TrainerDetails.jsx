import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Card, CardFooter, Chip, List, ListItem, Tooltip, Typography } from '@material-tailwind/react';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import buttonImg from '../../assets/bigLogo.png';
import trainerBG from '../../assets/trainerBG.png';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const TrainerDetails = () => {
    const trainer = useLoaderData();
    console.log(trainer.data);
    const { trainerName, category, profileImage, bio, yearsOfExperience, socialIcons, _id, availableSlots } = trainer.data;
    return (
        <div>
            <div className='relative bg-[#e2ff31] bg-opacity-50 h-40 lg:h-48 flex flex-col justify-center items-center'>
                <h1 className='text-5xl font-bold'>{trainerName}</h1>
                <div className='bg-white p-2 absolute rounded-full w-[200px] top-28 z-10 lg:top-32'>
                    <img className='rounded-full' src={profileImage} alt="" />
                </div>
            </div>
            <div className='mt-36 text-gray-600 p-2 md:p-4 lg:max-w-5xl lg:mx-auto'>
            <CardFooter className="flex justify-center gap-7 pt-2">
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
                </CardFooter>
                <p>{bio}</p>
                <div className='flex mt-8 mx-10 flex-col-reverse lg:flex-row lg:justify-evenly'>
                    <div>
                        <Typography variant="p" color="blue-gray" className="mb-2 flex justify-between items-center" textGradient>
                            Experiences: {yearsOfExperience} years
                        </Typography>
                        <Typography variant="p" color="blue-gray" className="mb-2 flex justify-between items-center" textGradient>
                            <span>Specialized in</span>
                            <Chip value={category} className='ml-2' />
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
                                    availableSlots.map(item =><Link to={`/trainer-booking/${_id}`} className="text-initial">
                                                                <ListItem>{item}</ListItem>
                                                            </Link> )
                                }
                            </List>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative flex justify-center max-w-5xl mx-auto mb-20 h-[350px]'>
                <img src={trainerBG} alt="" />
                <div className='absolute top-1/2'>
                    <Button
                        size="lg"
                        className="bg-[#e2ff31] text-lg text-black group relative flex items-center gap-3 overflow-hidden pr-[72px]"
                    >
                        Be a Trainer
                        <span className="absolute right-0 grid h-full w-12 place-items-center bg-[#e2ff31] transition-colors group-hover:bg-lime-600">
                            <img src={buttonImg} alt="metamask" className="h-12 w-12" />
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default TrainerDetails;