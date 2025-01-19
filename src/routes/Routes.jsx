import { createBrowserRouter} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import AllTrainers from "../pages/AllTrainers/AllTrainers";
import Register from "../pages/Register/Register";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Login from "../pages/Login/Login";

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
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'login',
            element: <Login></Login>
        }
      ],
      errorElement:<PageNotFound></PageNotFound>
    },
]);