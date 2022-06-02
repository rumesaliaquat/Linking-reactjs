import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import DashBoard from '../../pages/DashBoard';


function AppRouter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/dashboard" element={<DashBoard/>} />
                </Routes>
            </Router>

            
        </div>
    )
}

export default AppRouter
