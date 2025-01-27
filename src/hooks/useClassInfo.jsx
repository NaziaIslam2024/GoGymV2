import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useClassInfo = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: classDetails = []} = useQuery({
        queryKey: ['classDetails'],
        queryFn: async() => {
            const res = await axiosSecure.get('/all-classes');
            //console.log(res.data);
            return res.data;
        }
    })
    return [classDetails]
};

export default useClassInfo;