import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import DashBoard from '../../pages/DashBoard';
import Error from '../../pages/Error.js'

function AppRouter() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup/>} />
                    <Route path="/" element={<DashBoard/>} />
                    <Route path="*" element={<Error/>} />
                </Routes>
            </Router>

            
        </div>
    )
}

export default AppRouter
