import { Avatar, Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from '@material-tailwind/react';
import React from 'react';

const ClassCard = ({ classItem }) => {
    const { _id, name, classImg, details, bookingCount } = classItem;
    const truncateDEtails =  details.split(" ").slice(0, 12).join(" ") + "...";
    return (
        <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    className='h-[250px] w-full'
                    src={classImg}
                    alt="class image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                    {name}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal">
                    {truncateDEtails}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-end justify-between">
                <div className="flex items-end -space-x-3">
                    <Tooltip content="Natali Craig">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt="natali craig"
                            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                            className="border-2 border-white hover:z-10"
                        />
                    </Tooltip>
                    <Tooltip content="Tania Andrew">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt="tania andrew"
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                            className="border-2 border-white hover:z-10"
                        />
                    </Tooltip>
                </div>
                <Typography className="font-normal">Total Booking: {bookingCount}</Typography>
            </CardFooter>
        </Card>
    );
};

export default ClassCard;