import { Button, Chip } from '@nextui-org/react'
import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.svg'
import outlinedLogo from '@/public/logo-outline.svg'
import video from '@/public/video.mp4' // Ensure this line is present

const Hero = () => {
    return (
        <div className='grid grid-cols-8 grid-flow-row-dense mt-10'>
            <div className="col-span-2 relative">
                <Image src={outlinedLogo} sizes='large' height={450} width={450} className='absolute -left-36 top-16 -rotate-12' alt="Seven SVG" />
                <video controls autoPlay loop muted className='h-40 w-40 object-cover'>
                    <source src={video} type='video/mp4' /> {/* Ensure this line is present */}
                </video>
            </div>
            <div className="col-span-4 grid place-content-center px-8 py-4 gap-8">
                {/* <div className="row-span-1"></div> */}
                <Chip variant='flat' className='text-green-700 bg-gray-900 row-span-1 tracking-wider uppercase text-[10px]'>Integrating with AI</Chip>
                <div className='row-span-1'>
                    <h1 className="text-7xl text-left flex relative items-center">Take Control  <br />of Your Online <br /> Store
                        <div className='h-14 w-14 bg-green-400 rounded-full absolute bottom-2 left-48' /></h1>
                </div>
                <div className='row-span-1 flex gap-4'>
                    <p className="text-left text-sm tracking-wide">yt That's why our dashboard puts everything you need in one place - easy to access and even easier to use. </p>
                    <Button className='font-semibold rounded-full bg-white min-w-28 px-11 py-6'>Start Free Trail</Button>
                </div>
            </div>
            <div className="col-span-2 relative h-full">
                <Image src={logo} sizes='large' height={750} width={750} className='absolute scale-[2] -right-[65%] top-56 rotate-[95deg] ' alt="Seven SVG" />
            </div>

        </div>
    )
}

export default Hero