import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Email", "Date", "Price", "Transaction Id"];
const Finance = () => {
    const axiosSecure = useAxiosSecure();
    const { data: payment = [] } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get('/success-payment');
            return res.data;
        }
    })
    console.log(payment)
    const totalSum = payment.map(item => item.price);
    console.log(totalSum)
    const total = totalSum.reduce((acc, curr) => acc + curr, 0)
    console.log("orice total:", total)
    const lastSix = payment.slice(-6);
    // const {}
    return (
        <div className='mx-20'>
            <div className='mt-20 flex justify-between items-center'>
                <h1 className='text-2xl font-bold'>Total Payments: {payment.length}</h1>
                <h1 className='text-2xl font-bold'>Balance: {total}</h1>
            </div>
            <div className=''>
                <h1 className=' my-10 text-sm'>Last six transactions</h1>
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
                            {lastSix.map(({ price, memberEmail,date, transactionId }, index) => {
                                const isLast = index === lastSix.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {memberEmail}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {price}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {transactionId}
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>
            </div>

        </div>
    );
};

export default Finance;