import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: isRole} = useQuery({
        queryKey: [user?.email, 'isRole'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/role/${user.email}`);
            // console.log(res.data);
            return res.data.role;
        }
    })
    return [isRole]
};

export default useRole;