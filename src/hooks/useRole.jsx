import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useRole = () => {
    const {user} = useAuth();
    console.log(user.email)
    const axiosSecure = useAxiosSecure();
    const {data: isRole, isPending} = useQuery({
        queryKey: ['isRole', user?.email ],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/role/${user.email}`);
            return res.data.role;
        }
    })
    return [isRole,isPending]
};

export default useRole;