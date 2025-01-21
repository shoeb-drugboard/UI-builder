import React, { Suspense } from 'react';
import * as THREE from 'three';
import { Environment, OrbitControls, Sparkles } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import spaceBG from '@/public/space-bg.jpg'
const MyBox = () => {
    const meshRef = React.useRef<THREE.Mesh>(null);
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.001;
            meshRef.current.rotation.y += 0.001;
        }
    })
    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshToonMaterial color={0xaaffaa} wireframe={false} />
            <Sparkles count={100} size={2} scale={1} speed={0.02} noise={0.2} color={0x00ff00} />
        </mesh>
    )
}
const Three01 = () => {
    return (
        <Canvas className='h-screen w-screen flex justify-center items-center'>
            <Suspense fallback={null} >
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
                {/* <color attach="background" args={['#000']} /> */}
                <Environment files={spaceBG.src} background blur={0.02} environmentRotation={1} near={10} far={100} />
                <ambientLight intensity={1} />
                <MyBox />
            </Suspense>
        </Canvas >
    )
}

export default Three01