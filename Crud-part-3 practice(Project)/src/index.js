import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import RegisterPage from './Register';
import LoginPage from './Login';
import WelcomePage from './Admin/Welcome';
import Profile from "./Admin/Profile";
import AddrecordPage from './Admin/Addrecords';
import ViewPage from './Admin/View';
import Store from './redux-thunk/Store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={Store}>
<BrowserRouter>
    <Routes>
        <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/welcome" element={<WelcomePage/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/addrecord" element={<AddrecordPage/>}/>
    <Route path="/viewrecord" element={<ViewPage/>}/>
	


    <Route path="/*" element={<h1 align="center">Page Not Found</h1>}/>

    </Routes>

</BrowserRouter>
</Provider>

);
