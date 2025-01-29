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
import ClassesHome from "../pages/ClassesHome/ClassesHome";
import BecomeTrainer from "../pages/BacomeTrainer/BecomeTrainer";
import TrainerApplicationDetails from "../pages/Dashboard/TrainerApplicationDetails/TrainerApplicationDetails";
import { axiosSecure } from "../hooks/useAxiosSecure";
import ManageSlots from "../pages/Dashboard/TrainerDashboard/ManageSlots/ManageSlots";
import AddNewSlot from "../pages/Dashboard/TrainerDashboard/AddNewSlot/AddNewSlot";
import Payment from "../pages/Payment/Payment";
import MemberActivityLog from "../pages/Dashboard/Member/MemberActivityLog/MemberActivityLog";
import MemberProfile from "../pages/Dashboard/Member/MemberProfile/MemberProfile";
import BookedTrainer from "../pages/Dashboard/Member/BookedTrainer/BookedTrainer";

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
                path: 'training-classes',
                element: <ClassesHome></ClassesHome>
            },
            {
                path:'/be-a-trainer',
                element: <PrivateRoutes><BecomeTrainer></BecomeTrainer></PrivateRoutes>
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
                loader: ({ params }) => axiosPublic.get(`/slot/${params.id}`)
            },
            {
                path: 'payment/:id',
                element: <PrivateRoutes><Payment></Payment></PrivateRoutes>,
                loader: ({params}) => axiosSecure.get(`/make-payment/${params.id}`)
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
                element: <PrivateRoutes><AllNewsletterSubscribes></AllNewsletterSubscribes></PrivateRoutes>,
            },
            {
                path: 'add-class',
                element: <PrivateRoutes><AddClass></AddClass></PrivateRoutes>
            },
            {
                path: 'financial',
                element: <PrivateRoutes><Finance></Finance></PrivateRoutes>
            },
            {
                path: 'applied-trainer',
                element: <PrivateRoutes><AppliedTrainer></AppliedTrainer></PrivateRoutes>
            },
            {
                path: 'all-trainer',
                element: <PrivateRoutes><AllTrainers></AllTrainers></PrivateRoutes>
            },
            {
                path: '/dashboard/applied-trainer-details/:id',
                element: <PrivateRoutes><TrainerApplicationDetails></TrainerApplicationDetails></PrivateRoutes>,
                loader: ({ params }) => axiosSecure.get(`/trainers/${params.id}`)
            },
            //trainer dashboard
            {
                path: 'manage-slots',
                element: <PrivateRoutes><ManageSlots></ManageSlots></PrivateRoutes>
            },
            {
                path: 'add-new-slot',
                element: <PrivateRoutes><AddNewSlot></AddNewSlot></PrivateRoutes>
            },
            //member dashboard
            {
                path: 'member-activity-log',
                element: <PrivateRoutes><MemberActivityLog></MemberActivityLog></PrivateRoutes>,
            },
            {
                path: 'member-profile',
                element: <PrivateRoutes><MemberProfile></MemberProfile></PrivateRoutes>
            },
            {
                path:'booked-trainer',
                element: <PrivateRoutes><BookedTrainer></BookedTrainer></PrivateRoutes>
            }
        ]
    }
]);