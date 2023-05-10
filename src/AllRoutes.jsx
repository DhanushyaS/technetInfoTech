import React from 'react'
import {Routes,  Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Sales from './pages/Sales/Sales'
import Services from './pages/Services/Services'
import Contact from './pages/Contacts/Contact'
import Landingpage from './pages/Landingpage/Landingpage'
import Cart from './pages/Cart/cart'
import OrderNowForm from './pages/OrderNowForm/OrderNowForm'
function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/home' element={<Home />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/sales/:id' element={<OrderNowForm />} />
    </Routes>  
  )
}

export default AllRoutes