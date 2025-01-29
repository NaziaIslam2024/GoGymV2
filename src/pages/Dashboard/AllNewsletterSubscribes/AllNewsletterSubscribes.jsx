import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Card, Typography } from "@material-tailwind/react";


const TABLE_HEAD = ["Name", "Email"];

const AllNewsletterSubscribes = () => {
    const axiosSecure = useAxiosSecure();
    const { data: subscribers = [] } = useQuery({
        queryKey: ['subscribers'],
        queryFn: async () => {
            const res = await axiosSecure.get('/newsletter-subscribers');
            return res.data;
        }
    })
    // console.log(subscribers)
    return (
        <div className="max-w-5xl mx-auto">
            <div className='my-10 flex justify-center items-center'>
                <h1 className='text-2xl font-bold'>Total Subscribers:  {subscribers.length}</h1>
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
                        {subscribers.map(({ name, email }, index) => {
                            const isLast = index === subscribers.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={name}>
                                    <td className={classes}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {name}
                                        </Typography>
                                    </td>
                                    <td className={`${classes} bg-blue-gray-50/50`}>
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {email}
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

export default AllNewsletterSubscribes;