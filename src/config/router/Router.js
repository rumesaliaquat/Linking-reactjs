import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import DashBoard from '../../components/DashBoard';
import Login from '../../components/Login';
import Signup from '../../components/Signup';


function AppRouter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<DashBoard />} />
                </Routes>
            </Router>
        </div>
    )
}

export default AppRouter
