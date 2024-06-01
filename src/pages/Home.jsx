import React from 'react'
import Banner from '../components/Banner'
import Products from '../components/Products';
import OurBlog from '../components/OurBlog';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <div className='w-full flex flex-col px-28'>
                <Banner />
                <Products />
                <div className='mt-[650px] '>
                    <OurBlog />
                </div>
            </div>
            <div className='mt-[100px] '>
                <Clients />
            </div>
                <Footer/>
        </>
    )
}

export default Home; 