import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Chip,
} from "@material-tailwind/react";

const TrainerCardHome = ({ trainer }) => {
    const { trainerName, category, profileImage, bio } = trainer;
    const truncateBio =  bio.split(" ").slice(0, 20).join(" ") + "...";
    return (
        <div>
            <Card className="w-96">
                <CardHeader floated={false} className="h-80">
                    <img className="w-full h-full" src={profileImage} alt="profile-picture" />
                </CardHeader>
                <CardBody className="text-left">
                    <Typography variant="h4" color="blue-gray" className="mb-2 flex justify-between items-center">
                        <span>{trainerName}</span>
                        <Chip value={category} />
                    </Typography>
                    <Typography color="blue-gray" className="font-medium" textGradient>
                        {truncateBio}
                    </Typography>
                </CardBody>
                <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Like">
                        <Typography
                            as="a"
                            href="#facebook"
                            variant="lead"
                            color="blue"
                            textGradient
                        >
                            <i className="fab fa-facebook" />
                        </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                        <Typography
                            as="a"
                            href="#twitter"
                            variant="lead"
                            color="light-blue"
                            textGradient
                        >
                            <i className="fab fa-twitter" />
                        </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                        <Typography
                            as="a"
                            href="#instagram"
                            variant="lead"
                            color="purple"
                            textGradient
                        >
                            <i className="fab fa-instagram" />
                        </Typography>
                    </Tooltip>
                </CardFooter>
            </Card>
        </div>
    );
};

export default TrainerCardHome;