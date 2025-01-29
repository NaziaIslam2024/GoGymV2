import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useTrainerDetails = () => {
    // const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: trainerDetails = []} = useQuery({
        queryKey: ['trainerDetails'],
        queryFn: async() => {
            const res = await axiosSecure.get('/all-trainer-details');
            console.log(res.data);
            return res.data;
        }
    })
    return [trainerDetails]
};

export default useTrainerDetails;