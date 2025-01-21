"use client";
import React from 'react'
import Image from 'next/image';
import AboutMe from '@/components/Halo/AboutMe';
import aboutBg from '../../../../public/about-bg.jpg';

const Page = () => {
    return (
        <div className='min-h-screen w-screen bg-gradient-to-br from-blue-500/30 to-purple-500/30 relative overflow-x-hidden scroll-m-0 scrollbar-hide'>
            <Image
                src={aboutBg}
                layout='fill'
                alt='bg'
                className='w-full h-[180vh] sm:h-full object-cover object-center absolute top-0 left-0 z-10 opacity-50'
            />
            <AboutMe />
        </div>
    )
}

export default Page