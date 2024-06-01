import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
const Navbar = lazy(() => import('../components/Navbar'))
const Home = lazy(() => import('../pages/Home'))
const AllProducts = lazy(() => import('../pages/AllProducts'))
const About = lazy(() => import('../pages/About'))
const OurBlog = lazy(() => import('../pages/OurBlog'))
const Contacts = lazy(() => import('../pages/Contacts'))
const Basket = lazy(() => import('../pages/Basket/Basket'))
const Payment = lazy(() => import('../pages/Payment'))
function Layout() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/allProducts' element={<AllProducts />} />
                <Route path='/about' element={<About />} />
                <Route path='/ourBlog' element={<OurBlog />} />
                <Route path='/Contacts' element={<Contacts />} />
                <Route path='/basket' element={<Basket />} />
                <Route path='/payment' element={<Payment />} />
            </Routes>

        </>
    )
}

export default Layout;