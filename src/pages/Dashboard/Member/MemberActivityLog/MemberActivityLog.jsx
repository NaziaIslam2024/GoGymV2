import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Avatar,
} from "@material-tailwind/react";

const MemberActivityLog = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: myStatus = [], refetch } = useQuery({
        queryKey: ['myStatus'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/pending-member/${user.email}`);
            return res.data;
            //todo: sohan k ask korte hobe trainer delete korar por role : 'member' hobe but baki field gula kivabe delete korte hobe?
        }

    })
    console.log(myStatus);
    return (
        <div className='w-full max-w-5xl mx-auto my-20'>
            <Card className="mt-6 w-96">
                <CardBody>
                    {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="mb-4 h-12 w-12 text-gray-900"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                        clipRule="evenodd"
                    />
                    <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z" />
                </svg> */}
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                    <Avatar className='mr-4' src={myStatus.url} alt="avatar" />
                        {myStatus.name}
                    </Typography>
                    <Typography>
                        Applied position: {myStatus.skills}
                    </Typography>
                    <Typography>
                        Status: {myStatus.role}
                    </Typography>
                </CardBody>
                {myStatus.role === "rejected" && 
                <CardFooter className="pt-0">
                <a href="#" className="inline-block">
                    <Button size="sm" variant="text" className="flex items-center gap-2">
                        rejected
                    </Button>
                </a>
            </CardFooter>}
            </Card>
        </div>
    );
};

export default MemberActivityLog;