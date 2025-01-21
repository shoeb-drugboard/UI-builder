import React from 'react';
import * as THREE from 'three'
import { OrbitControls, Stars, useTexture } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import earth from '@/assets/earthlights1k.jpg'
import earthNormal from '@/assets/earthmap1k.jpg'
import earthClouds from '@/assets/earthcloudmap.jpg'
const Ball = () => {
    const meshRef = React.useRef<THREE.Mesh>(null);
    const groupRef = React.useRef<THREE.Group>(null);
    const CityLightsRef = React.useRef<THREE.Mesh>(null);
    const CloudsRef = React.useRef<THREE.Mesh>(null);
    const earthTexture = useTexture(earth.src);
    const earthTextureNormal = useTexture(earthNormal.src);
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()
        if (groupRef.current) {
            groupRef.current.rotation.z = -23.4 * Math.PI / 180;
            // groupRef.current.rotation.y += t * 0.00001;
        }
        if (meshRef.current) {
            // meshRef.current.scale.setScalar(bounce);
            meshRef.current.rotation.y += t * 0.0001;
        }
        if (CityLightsRef.current) {
            // CityLightsRef.current.scale.setScalar(bounce
            CityLightsRef.current.rotation.y += t * 0.0001;
        }
        if (CloudsRef.current) {
            // CloudsRef.current.scale.setScalar(bounce);
            CloudsRef.current.scale.setScalar(1.002)
            CloudsRef.current.rotation.y += t * 0.00014;
        }
    });
    return (
        <group ref={groupRef}>
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1, 20]} />
                <meshStandardMaterial map={earthTextureNormal} normalMap={earthTextureNormal} wireframe={false} />
            </mesh>
            <mesh ref={CityLightsRef}>
                <icosahedronGeometry args={[1, 20]} />
                <meshBasicMaterial map={earthTexture} blending={THREE.AdditiveBlending} wireframe={false} />
            </mesh>
            <mesh ref={CloudsRef}>
                <icosahedronGeometry args={[1, 30]} />
                <meshStandardMaterial map={useTexture(earthClouds.src)} blending={THREE.AdditiveBlending} wireframe={false} opacity={0.8} transparent={true} />
            </mesh>
        </group>
    )
}

const Earth = () => {
    return (
        <Canvas className='h-screen w-screen flex justify-center items-center' camera={{ position: [0, 0, 5], fov: 75, near: 0.2, far: 100 }}>
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
            <Stars radius={100} count={200} />
            <directionalLight color={0xffffff} position={[-2, -0.5, 1.5]} intensity={1} />
            <Ball />
        </Canvas>
    )
}

export default Earth