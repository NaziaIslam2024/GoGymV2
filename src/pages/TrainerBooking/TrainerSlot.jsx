import { Avatar, Card, CardBody, CardFooter, CardHeader, Tooltip, Typography } from '@material-tailwind/react';

const TrainerSlot = ({ classItem, data}) => {
    const { _id, name, classImg, details, bookingCount } = classItem;
    const {slots, url} = data;
    const slotDetails = slots.filter(item => item.class.includes(name));
    console.log(name)
    return (
        <Card className="max-w-[24rem] overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none"
            >
                <img
                    className='h-[200px] w-full'
                    src={classImg}
                    alt="class image"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h4" color="blue-gray">
                    {name}
                </Typography>
            </CardBody>
            <CardFooter className="flex items-end justify-between">
                <div className="flex items-end -space-x-3">
                    <Tooltip content="Natali Craig">
                        <Avatar
                            size="sm"
                            variant="circular"
                            alt="natali craig"
                            src={url}
                            className="border-2 border-white hover:z-10"
                        />
                    </Tooltip>
                </div>
                <Typography className="font-normal">Total Booking: {bookingCount}</Typography>
            </CardFooter>
        </Card>
    );
};

export default TrainerSlot;


