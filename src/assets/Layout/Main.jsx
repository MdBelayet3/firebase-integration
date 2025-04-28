import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';

const Main = () => {
    return (
        <div>
            <h1>This is main section</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;