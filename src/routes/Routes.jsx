import { createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllTrainers from "../pages/AllTrainers/AllTrainers";
import Register from "../pages/Register/Register";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Login from "../pages/Login/Login";
import { axiosPublic } from "../hooks/useAxiosPublic";
import TrainerDetails from "../pages/TrainerDetails/TrainerDetails";
import TrainerBooking from "../pages/TrainerBooking/TrainerBooking";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path: 'trainers',
            element:<AllTrainers></AllTrainers>
        },
        {
            path: 'trainers/:id',
            element:<TrainerDetails></TrainerDetails>,
            loader: ({params}) => axiosPublic.get(`/trainers/${params.id}`)
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path:'/trainer-booking',
            element:<PrivateRoutes><TrainerBooking></TrainerBooking></PrivateRoutes>
        }
      ],
      errorElement:<PageNotFound></PageNotFound>
    },
]);