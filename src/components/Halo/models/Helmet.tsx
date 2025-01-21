import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

interface ModelProps extends React.ComponentProps<'group'> { }

interface HelmetGLTF {
    nodes: {
        Object_2: THREE.Mesh
    }
    materials: {
        PaletteMaterial001: THREE.MeshStandardMaterial
    }
    scene: THREE.Group
}

export function Helmet(props: ModelProps) {
    const helmetRef = useRef<THREE.Group>(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    const { nodes, materials } = useGLTF('/models/halo-helmet.glb') as unknown as HelmetGLTF;

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mousePosition.current.x = (e.clientX / window.innerWidth - 0.5);
            mousePosition.current.y = (e.clientY / window.innerHeight - 0.5);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    useFrame((() => {
        if (helmetRef.current) {
            helmetRef.current.rotation.y = THREE.MathUtils.lerp(
                helmetRef.current.rotation.y,
                mousePosition.current.x * (Math.PI * 0.3),
                0.1
            );
            helmetRef.current.rotation.x = THREE.MathUtils.lerp(
                helmetRef.current.rotation.x,
                mousePosition.current.y * (Math.PI * 0.3),
                0.1
            );
        }
    }));

    return (
        <group {...props} dispose={null}
            ref={helmetRef}
            scale={[0.1, 0.1, 0.1]}
        >
            <mesh
                name="Object_2"
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials.PaletteMaterial001}
                rotation={[-Math.PI / 2, 0, 0]}
            />
        </group>
    )
}

useGLTF.preload('/models/halo-helmet.glb')
