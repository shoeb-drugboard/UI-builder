"use client"
import React from 'react'
import Image from 'next/image'
import Navigation from '@/components/Halo/Navigation'
import RenderModel from '@/components/Three/RenderModel'
import { Helmet } from '@/components/Halo/models/Helmet'
import homebg from '../../../public/home-bg.jpg'
import { Environment } from '@react-three/drei'

const Page = () => {

    return (
        <div className='h-screen w-screen bg-transparent relative overflow-x-hidden scroll-m-0 scrollbar-hide'>
            <Image src={homebg} layout='fill' fill alt='bg' className='w-full h-full object-cover object-center absolute top-0 left-0 z-10' />
            < Navigation />
            <div className="bg-blue-800 h-[20rem] w-[20rem] rounded-full absolute top-1/2 left-1/2 blur-3xl transform -translate-x-1/2 -translate-y-1/2 " />
            <RenderModel>
                <Environment preset='night' />
                <ambientLight intensity={2} color="#ffffff" />
                <directionalLight position={[-2, 0, 5]} intensity={1} color="#ffffff" />
                <pointLight position={[10, 10, 10]} intensity={1} color="#FDB813" />
                <pointLight position={[0, 0, -10]} intensity={2} color="#0066ff" />
                <Helmet />
                {/* <Spaceship /> */}
            </RenderModel>
            {/* <RenderCar /> */}
        </div >
    )
}

export default Page