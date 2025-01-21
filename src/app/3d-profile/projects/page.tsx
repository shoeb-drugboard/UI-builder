"use client"
import React from 'react'
import projectbg from '../../../../public/pr-bg.jpg';
import Image from 'next/image';
import RenderModel from '@/components/Three/RenderModel';
import { Environment } from '@react-three/drei';
import { Spaceship } from '@/components/Halo/models/Spaceship';
import ProjectPanel from '@/components/Halo/ProjectPanel';

const Page = () => {
    return (
        <div className='group w-screen h-full sm:h-screen relative bg-transparent overflow-x-hidden'>
            <Image src={projectbg} fill alt='bg' className='w-full h-[180vh] sm:h-full object-cover object-center absolute top-0 left-0 z-10' />
            <ProjectPanel />
            <RenderModel className='z-20'>
                <Environment preset='warehouse' />
                <ambientLight intensity={2} color="#ffffff" />
                <Spaceship />
            </RenderModel>
        </div>
    )
}

export default Page