import React from 'react';
import { Outlet } from 'react-router-dom';
import AppNavbar from '../shared/AppNavbar';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div>
            <AppNavbar></AppNavbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;