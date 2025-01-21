"use client"
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { Car } from '../Halo/models/Car'
import { Environment, OrbitControls } from '@react-three/drei'

const RenderCar = () => {
    return (
        <Canvas className='w-screen h-screen z-20 relative' camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null} >
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
                <Car />
                <Environment preset="dawn" />
            </Suspense>
        </Canvas>
    )
}

export default RenderCar