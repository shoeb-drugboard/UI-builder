import React, { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const BallMesh = () => {
    const meshRef = useRef<THREE.Mesh>(null);
    const wireMeshRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        const t = clock.getElapsedTime();
        const bounce = Math.abs(Math.sin(t * 2)) * 0.5 + 0.5;
        if (meshRef.current) {
            // meshRef.current.rotation.y += t * 0.00001;
            meshRef.current.scale.setScalar(bounce);
        }
        if (wireMeshRef.current) {
            // wireMeshRef.current.rotation.y += t * 0.00001;
            // wireMeshRef.current.scale.setScalar(bounce);
        }
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[1.2, 2,]} />
            <meshStandardMaterial color={0x12cfff} flatShading={true} />
            <mesh ref={wireMeshRef}>
                <icosahedronGeometry args={[1.2, 2]} />
                <meshBasicMaterial color={0xffffff} wireframe={true} />
            </mesh>
            <hemisphereLight color={0xff4891} groundColor={0xaba900} />
        </mesh>
    );
};

const Sphere = () => {
    return (
        <Canvas camera={{ position: [0, 0, 4], fov: 75, near: 0.2, far: 100 }}>
            <ambientLight color={0xffffff} intensity={1} />
            <directionalLight color={0xffffff} position={[1, 1, 1]} intensity={1} />
            <OrbitControls enableDamping={true} dampingFactor={0.02} enableZoom={true} />
            <BallMesh />
        </Canvas>
    );
};

export default Sphere;