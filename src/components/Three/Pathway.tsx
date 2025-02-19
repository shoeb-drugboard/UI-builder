import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import React from 'react'

const Spline = () => {
    const meshRef = React.useRef<THREE.Mesh>(null)
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()
        if (meshRef.current) {
            meshRef.current.position.x = Math.sin(t)
            meshRef.current.position.y = Math.cos(t)
        }
    })
    const points = [
        new THREE.Vector3(-2, 0, 0),
        new THREE.Vector3(-1, 1, 0),
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(1, -1, 0),
        new THREE.Vector3(2, 0, 0)
    ]

    // const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)

    return (
        <>
            <mesh ref={meshRef}>
                <tubeGeometry args={[new THREE.CatmullRomCurve3(points, true), 64, 0.1, 8, true]} />
                <meshBasicMaterial color="red" />
            </mesh>

        </>
    )
}

const Pathway = () => {
    return (
        <Canvas camera={{ position: [0, 0, 5] }} >
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} />
            <Spline />
        </Canvas>
    )
}

export default Pathway