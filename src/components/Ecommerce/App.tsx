"use client";
import React from 'react';
import Cart from './Cart';
import Cards from './Cards';
const App = () => {
    return (
        <div className='w-screen h-screen relative m-auto grid justify-center items-center overflow-x-hidden'>
            <h1 className='text-4xl font-bold text-center my-4 mb-10'>Ecommerce</h1>
            <Cart />
            <Cards />
        </div>
    )
}

export default App

