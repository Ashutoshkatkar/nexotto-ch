import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet
} from 'react-router-dom';
import App1 from './App1';

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<App1 />} />

            </Routes>
        </>
    )
}

export default Routing
