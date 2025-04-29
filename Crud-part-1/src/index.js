import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import RegisterPage from './Register';
import LoginPage from './Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
    <Routes>
        <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    
	


    <Route path="/*" element={<h1 align="center">Page Not Found</h1>}/>

    </Routes>

</BrowserRouter>

);
