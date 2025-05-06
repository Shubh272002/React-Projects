import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Home';
import { CartProvider } from './Cartmethod';
import CartPage from './CartPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CartProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Homepage/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>

);
