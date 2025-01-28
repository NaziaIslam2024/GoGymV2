import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { Avatar, Card, IconButton, Tooltip, Typography } from '@material-tailwind/react';
import { AiTwotoneDelete } from "react-icons/ai";
import Swal from 'sweetalert2';

const TABLE_HEAD = ["Day", "Slot-time", "Class", "Booking", "Delete"];
const ManageSlots = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { isPending, data: trainerSlots = [], refetch } = useQuery({
        queryKey: ['trainerSlots'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-slots/${user.email}`);
            return res.data;
        }
    })
    
    if(isPending){
        return <h1>loading....</h1>
    }
    // console.log("info-->", trainerSlots);

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
                    axiosSecure.delete(`/delete-slot/${id}`)
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
        // <div>
        //     lll
        //     {trainerSlots.length}
        // </div>
        <>
        {
            trainerSlots.length === 0 ?
                <div className='flex justify-center'> <h1 className='text-gray-600 text-5xl mt-40'>No slot available . Please add new slot</h1></div>
                :
                <div className="max-w-5xl mx-auto">
                    <div className='my-10 flex justify-center items-center'>
                        <h1 className='text-2xl font-bold'>Total slots:  {trainerSlots.length}</h1>
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
                                {trainerSlots.map(({ _id, trainerClass, day, slot}, index) => {
                                    const isLast = index === trainerSlots.length - 1;
                                    const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={slot}>
                                            {/* <td className={classes}>
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
                                            </td> */}
                                            <td className={classes}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {day}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {slot}
                                                </Typography>
                                            </td>
                                            <td className={`${classes}`}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {trainerClass}
                                                </Typography>
                                            </td>
                                            <td className={`${classes}`}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                pore korbo
                                                </Typography>
                                            </td>
                                            <td className={`${classes}`}>
                                                <Tooltip content="Delete Slot">
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

export default ManageSlots;