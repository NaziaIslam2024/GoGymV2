import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Login from "../pages/Login/Login";
import { axiosPublic } from "../hooks/useAxiosPublic";
import TrainerDetails from "../pages/TrainerDetails/TrainerDetails";
import TrainerBooking from "../pages/TrainerBooking/TrainerBooking";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layout/Dashboard";
import AllNewsletterSubscribes from "../pages/Dashboard/AllNewsletterSubscribes/AllNewsletterSubscribes";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import Finance from "../pages/Dashboard/Finance/Finance";
import AppliedTrainer from "../pages/Dashboard/AppliedTrainer/AppliedTrainer";
import AllTrainers from "../pages/Dashboard/AllTrainers/AllTrainers";
import ForumPosts from "../components/ForumPosts/ForumPosts";
import AllTrainerss from "../pages/AllTrainers/AllTrainers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'trainers',
                element: <AllTrainerss></AllTrainerss>
            },
            {
                path: 'trainers/:id',
                element: <TrainerDetails></TrainerDetails>,
                loader: ({ params }) => axiosPublic.get(`/trainers/${params.id}`)
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
                path: 'community',
                element: <ForumPosts></ForumPosts>
            },
            {
                path: '/trainer-booking/:id',
                element: <PrivateRoutes><TrainerBooking></TrainerBooking></PrivateRoutes>,
                loader: ({ params }) => axiosPublic.get(`/trainers/${params.id}`)
            }
        ],
        errorElement: <PageNotFound></PageNotFound>
    },
    {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'newsletterSubscribers',
                element: <AllNewsletterSubscribes></AllNewsletterSubscribes>,
            },
            {
                path: 'add-class',
                element: <AddClass></AddClass>
            },
            {
                path: 'financial',
                element: <Finance></Finance>
            },
            {
                path: 'applied-trainer',
                element: <AppliedTrainer></AppliedTrainer>
            },
            {
                path: 'all-trainer',
                element: <AllTrainers></AllTrainers>
            },
        ]
    }
]);