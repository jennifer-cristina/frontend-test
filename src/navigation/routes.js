import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Login } from '../pages/Login/index';
import { Register } from '../pages/Register/index';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;