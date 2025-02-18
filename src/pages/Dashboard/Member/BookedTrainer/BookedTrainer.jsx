import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Avatar, Button, Card, CardBody, CardFooter, Dialog, IconButton, Input, Rating, Textarea, Tooltip, Typography } from '@material-tailwind/react';
import { Controller, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
// Star Rating
const StarRating = ({ rating, setRating }) => {
    return (
        <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    onClick={() => setRating(star)}
                    className={`text-2xl ${star <= rating ? "text-yellow-500" : "text-gray-300"}`}
                >
                    ★
                </button>
            ))}
        </div>
    );
};

const TABLE_HEAD = ["Trainer", "Class", "Day", "Slot Time", "Review"];
const BookedTrainer = () => {
    const [rating, setRating] = useState(0);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen((cur) => !cur);


    const { isPending, data: membersbookings = [], refetch } = useQuery({
        queryKey: ['membersbookings'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/member-bookings/${user.email}`);
            return res.data;
        }
    })

    const { control, register, reset, handleSubmit, formState: { errors }, watch } = useForm();

    const onSubmit = async (data) => {
        const reviewInfo = { review: data.msg, rating: rating, email: user.email }
        // console.log("t--------->", reviewInfo)

        const res = await axiosSecure.post('/post-reviews', reviewInfo);
        if (res.data.insertedId) {
            reset();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your Blog posted successfully',
                showConfirmButton: false,
                timer: 1000
            });
        }
    }

    if (isPending) {
        return <h1>loading....</h1>
    }
    // console.log("info-->", membersbookings);
    return (
        <>
            {
                membersbookings.length === 0 ?
                    <div className='flex justify-center'> <h1 className='text-gray-600 text-5xl mt-40'>No slot available . Please add new slot</h1></div>
                    :
                    <div className="max-w-5xl mx-auto">
                        <div className='my-10 flex justify-center items-center'>
                            <h1 className='text-2xl font-bold'>Total slots:  {membersbookings.length}</h1>
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
                                    {membersbookings.map(({ _id, paymentDetails, day, slot }, index) => {
                                        const isLast = index === membersbookings.length - 1;
                                        const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                        return (
                                            <tr key={index}>

                                                <td className={classes}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {paymentDetails.detailInfo.trainerName}
                                                    </Typography>
                                                </td>
                                                <td className={classes}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {paymentDetails.detailInfo.trainerClass}
                                                    </Typography>
                                                </td>
                                                <td className={`${classes}`}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {paymentDetails.detailInfo.day}
                                                    </Typography>
                                                </td>
                                                <td className={`${classes}`}>
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {paymentDetails.detailInfo.slot}
                                                    </Typography>
                                                </td>
                                                <td className={`${classes}`}>
                                                    {/* <Tooltip content="Delete Slot"> */}
                                                    <Button onClick={handleOpen} className='text-md' color="red" variant="text">
                                                        Review
                                                    </Button>
                                                    {/* </Tooltip> */}
                                                    {/* //---------MODAL---------- */}
                                                    <Dialog
                                                        size="lg"
                                                        open={open}
                                                        handler={handleOpen}
                                                        className="bg-transparent shadow-none"
                                                    >
                                                        <Card className="mx-auto w-full max-w-3xl">
                                                            <form onSubmit={handleSubmit(onSubmit)} className='pb-4'>
                                                                <CardBody className="flex flex-col gap-4">
                                                                    <Typography variant="h4" color="blue-gray">
                                                                        Your Review
                                                                    </Typography>
                                                                    <Textarea label="Message" {...register("msg", { required: true })} />
                                                                    {errors.msg && <span className="text-sm text-red-500">this field is required</span>}
                                                                    <Typography className="-mb-2" variant="h6">
                                                                        Rate Trainer
                                                                    </Typography>
                                                                    <StarRating rating={rating} setRating={setRating} />
                                                                </CardBody>
                                                                <CardFooter className="pt-0">
                                                                    <Input
                                                                        type="submit"
                                                                        value="Submit Review"
                                                                        size="lg"
                                                                        className="!my-6 !text-[#e2ff31] !bg-black !border-t-blue-gray-200 focus:!border-t-gray-900"
                                                                        labelProps={{
                                                                            className: "before:content-none after:content-none",
                                                                        }}
                                                                    />
                                                                </CardFooter>
                                                            </form>
                                                        </Card>
                                                    </Dialog>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </Card>

                    </div >

            }
        </>
    );
};

export default BookedTrainer;