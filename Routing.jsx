import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import Header from './Component/Header/Header.jsx'
import Landing from './Pages/Landing/Landing.jsx'
import SignIn from './Pages/Auth/Signup.jsx'  
import Payment from './Pages/Payment/Payment.jsx'
import Orders from './Pages/Orders/Orders.jsx'
import Results from './Pages/Results/Results.jsx'
import Cart from './Pages/Cart/Cart.jsx'
import ProductDetail from './Pages/ProductDetail/ProductDetail.jsx'

function Routing() {
  return (
    <Router>
        <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/auth" element={<SignIn/>} />
                <Route path="/payments" element={<Payment />} />
                <Route path="/orders" element={<Orders/>} />
                <Route path="/category/:categoryName" element={<Results />} />
                <Route path="/products/:productId" element={<ProductDetail />} />
                <Route path="/cart" element={<Cart />} />
       </Routes>
    </Router>
  )
}

export default Routing


