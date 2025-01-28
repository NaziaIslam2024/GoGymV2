import React from 'react';
import useTrainers from '../../../hooks/useTrainers';
import { Avatar, Card, IconButton, Spinner, Tooltip, Typography } from '@material-tailwind/react';
import { GoPencil } from "react-icons/go";
import { AiTwotoneDelete } from "react-icons/ai";
import { useQuery } from '@tanstack/react-query';
import { axiosSecure } from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const TABLE_HEAD = ["Photo", "Day", "Slot-name", "Slot-time", "Class", "Delete"];

const AllTrainers = () => {
    // const [trainers, loading] = useTrainers();
    // console.log(trainers)
    // const { availableSlots, profileImage, bio, category, trainerName } = trainers;
    const { data: trainers = [], refetch } = useQuery({
        queryKey: ['trainers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/trainers');
            return res.data;
            //todo: sohan k ask korte hobe trainer delete korar por role : 'member' hobe but baki field gula kivabe delete korte hobe?
        }
    })
    console.log("info-->", trainers);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    //   Swal.fire({
                    //     title: "Deleted!",
                    //     text: "Your file has been deleted.",
                    //     icon: "success"
                    //   });
                    axiosSecure.put(`/delete-trainer/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Trainer has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            });
    }

    return (
        <>
            {
                trainers.length === 0 ?
                    <div className='flex justify-center'> <h1 className='text-gray-600 text-5xl mt-40'>No data available</h1></div>
                    :
                    <div className="max-w-5xl mx-auto">
                        <div className='my-10 flex justify-center items-center'>
                            <h1 className='text-2xl font-bold'>Total Trainers:  {trainers.length}</h1>
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
                                    {trainers.map(({ _id, name, email, url, availableDay, availableTime, skills, classDurationHour }, index) => {
                                        const isLast = index === trainers.length - 1;
                                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={url}>
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
                                                <td className={classes}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {availableDay.map((day, idx) => <li key={idx}>{day.value}</li>)}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {availableTime.map((time, idx) => <li key={idx}>{time.value}</li>)}
                                                    </Typography>
                                                </td>
                                                <td className={`${classes}`}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {classDurationHour} hours
                                                    </Typography>
                                                </td>
                                                <td className={`${classes}`}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {skills.map((skill, idx) => <li key={idx}>{skill}</li>)}
                                                    </Typography>
                                                </td>
                                                <td className={`${classes}`}>
                                                    <Tooltip content="Delete User">
                                                        <IconButton onClick={() => handleDelete(_id)} className='text-lg' color="red" variant="text">
                                                            <AiTwotoneDelete />
                                                        </IconButton>
                                                    </Tooltip>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </Card>

                    </div>

            }
        </>
    );
};

export default AllTrainers;