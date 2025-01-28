import { Avatar, Button, Card, Typography } from '@material-tailwind/react';
import React from 'react';
import useUser from '../../../hooks/useUser';
import { Link } from 'react-router-dom';

const TABLE_HEAD = ["Personal", "Skills", "Available-Slots", "Details"];

const AppliedTrainer = () => {
    const [pendingTrainers, isPending] = useUser();
    // console.log(pendingTrainers);
    if (isPending) {
        return <div className='flex items-center justify-center mt-32'><h1 className='text-3xl text-gray-600'>Loading...</h1></div>
    }
    return (
        <div className="max-w-5xl mx-auto">
            <div className='my-10 flex justify-center items-center'>
                <h1 className='text-2xl font-bold'>Total Applications:  {pendingTrainers.length}</h1>
            </div>
            <Card className="rounded-none h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {pendingTrainers.map(({ _id, name, email, url, skills, availableDay }, index) => {
                            const isLast = index === pendingTrainers.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={email}>
                                    <td className={classes}>
                                        <div className="flex items-center gap-3">
                                            <Avatar src={url} alt={name} size="sm" />
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {name}
                                                </Typography>
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal opacity-70"
                                                >
                                                    {email}
                                                </Typography>
                                            </div>
                                        </div>
                                    </td>
                                    <td className={`${classes} bg-blue-gray-50/50`}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {
                                                skills.map((skill, index) => <li key={index}>{skill}</li>)
                                            }
                                        </Typography>
                                    </td>
                                    <td className={`${classes}`}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {
                                                availableDay.map((day, index) => <li key={index}>{day.value}</li>)
                                            }
                                        </Typography>
                                    </td>
                                    <td className={`${classes}`}>
                                        <Typography variant="small" color="blue-gray" className="font-medium">
                                            <Link to={`/dashboard/applied-trainer-details/${_id}`}>
                                                <Button size="sm" variant="outlined">Details</Button>
                                            </Link>
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card>

        </div>
    );
};

export default AppliedTrainer;