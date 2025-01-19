import React, { useEffect, useState } from 'react';
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logoB.png'
import useAuth from '../hooks/useAuth';

const AppNavbar = () => {
    const { user, logout } = useAuth();
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error.message))
    }

    const [openNav, setOpenNav] = useState(false);
    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to='/' className="flex items-center focus:bg-[#e2ff31] focus:p-2 focus:underline-offset-8 focus:text-black">
                    HOME
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <NavLink to='/trainers' className="flex items-center focus:bg-[#e2ff31] focus:p-2 focus:underline-offset-8 focus:text-black">
                    TRAINERS
                </NavLink>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center focus:bg-[#e2ff31] focus:p-2 focus:underline-offset-8 focus:text-black">
                    CLASSES
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center focus:bg-[#e2ff31] focus:p-2 focus:underline-offset-8 focus:text-black">
                    COMMUNITY
                </a>
            </Typography>
            {
                user ? <>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal"
                    >
                        <a href="#" className="flex items-center focus:bg-[#e2ff31] focus:p-2 focus:underline-offset-8 focus:text-black">
                            DASHBOARD
                        </a>
                    </Typography>
                    <Typography
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 font-normal"
                    >
                        <a href="#" className="flex items-center focus:bg-[#e2ff31] focus:p-2 focus:underline-offset-8 focus:text-black">
                            USER PROFILE
                        </a>
                    </Typography>
                    <div className="flex items-center gap-x-1">
                        <Link
                            variant="text"
                            size="sm"
                            onClick={handleLogout}
                            className="hidden p-2 bg-[#e2ff31] border border-black lg:inline-block"
                        >
                            <span>Logout</span>
                        </Link>
                    </div>
                </> : <>
                    <div className="flex items-center gap-x-1">
                        <Link
                            to='/login'
                            variant="text"
                            size="sm"
                            className=" p-2 rounded-md hidden bg-[#e2ff31] border border-black lg:inline-block"
                        >
                            <span>Log In</span>
                        </Link>
                    </div>
                </>
            }


        </>
    );

    return (
        <Navbar className="sticky border-none top-0 z-10 h-max max-w-full rounded-none px-4 py-0 lg:px-8">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer font-medium"
                >
                    <img className='w-[100px]' src={logo} alt="" />
                </Typography>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">
                        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            {navList}
                        </ul>
                    </div>
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
                <div className="flex items-center gap-x-1">
                    <Button fullWidth variant="text" size="sm" className="mb-4">
                        <span>Log In</span>
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
};

export default AppNavbar;