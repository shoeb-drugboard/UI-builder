"use client"
import React from 'react'
import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { ThreeElements, useFrame } from '@react-three/fiber'

interface GLTFResult {
    nodes: {
        [key: string]: THREE.Mesh
    },
    materials: {
        [key: string]: THREE.Material
    }
}

export function Car(props: ThreeElements['group']) {
    const carRef = React.useRef<THREE.Group>(null)
    const { nodes, materials } = useGLTF('/models/car-3d.glb') as unknown as GLTFResult
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()
        if (carRef.current) {
            carRef.current.position.x = -1.5 + Math.sin(t)
            // carRef.current.position.y = Math.cos(t)
        }
    })
    return (
        <group {...props} dispose={null}
            position={[-2, 0, 0]}
            scale={[6, 6, 6]}
            rotation={[0, 1.5, 0]}
            ref={carRef}>
            <mesh
                name="KOP_Body_Geo_KOP_Body_Shd_0"
                castShadow
                receiveShadow
                geometry={nodes.KOP_Body_Geo_KOP_Body_Shd_0.geometry}
                material={materials.KOP_Body_Shd}
                scale={0.01}
            />
            <mesh
                name="KOP_Base_Geo_KOP_Base_Shd_0"
                castShadow
                receiveShadow
                geometry={nodes.KOP_Base_Geo_KOP_Base_Shd_0.geometry}
                material={materials.KOP_Base_Shd}
                scale={0.01}
            />
            <mesh
                name="KOP_Seats_Geo_KOP_Seats_Shd_0"
                castShadow
                receiveShadow
                geometry={nodes.KOP_Seats_Geo_KOP_Seats_Shd_0.geometry}
                material={materials.KOP_Seats_Shd}
                scale={0.01}
            />
            <mesh
                name="KOP_Rims_Geo_KOP_Rims_Shd_0"
                castShadow
                receiveShadow
                geometry={nodes.KOP_Rims_Geo_KOP_Rims_Shd_0.geometry}
                material={materials.KOP_Rims_Shd}
                scale={0.01}
            />
            <mesh
                name="KOP_InCarbonFiber_Geo_KOP_InCarbonFiber_Shd_0"
                castShadow
                receiveShadow
                geometry={nodes.KOP_InCarbonFiber_Geo_KOP_InCarbonFiber_Shd_0.geometry}
                material={materials.KOP_InCarbonFiber_Shd}
                scale={0.01}
            />
            <mesh
                name="KOP_OutCarbonFiber_Geo_KOP_OutCarbonFiber_Shd_0"
                castShadow
                receiveShadow
                geometry={nodes.KOP_OutCarbonFiber_Geo_KOP_OutCarbonFiber_Shd_0.geometry}
                material={materials.KOP_OutCarbonFiber_Shd}
                scale={0.01}
            />
            <mesh
                name="KOP_DiskBrake_Geo_KOP_DiskBrake_Shd_0"
                castShadow
                receiveShadow
                geometry={nodes.KOP_DiskBrake_Geo_KOP_DiskBrake_Shd_0.geometry}
                material={materials.KOP_DiskBrake_Shd}
                scale={0.01}
            />
            <mesh
                name="KOP_Cockpit_Geo_KOP_Cockpit_Shd_0"
                castShadow
                receiveShadow
                geometry={nodes.KOP_Cockpit_Geo_KOP_Cockpit_Shd_0.geometry}
                material={materials.KOP_Cockpit_Shd}
                scale={0.01}
            />
            <mesh
                name="KOP_Tyre_Geo_KOP_Tyre_Shd_0"
                castShadow
                receiveShadow
                geometry={nodes.KOP_Tyre_Geo_KOP_Tyre_Shd_0.geometry}
                material={materials.KOP_Tyre_Shd}
                scale={0.01}
            />
            <mesh
                name="KOP_Grills_Geo_KOP_Grills_Shd_0"
                castShadow
                receiveShadow
                geometry={nodes.KOP_Grills_Geo_KOP_Grills_Shd_0.geometry}
                material={materials.KOP_Grills_Shd}
                scale={0.01}
            />
            <mesh
                name="KOP_Emissive_Geo_KOP_Emissive_Shd_0"
                castShadow
                receiveShadow
                geometry={nodes.KOP_Emissive_Geo_KOP_Emissive_Shd_0.geometry}
                material={materials.KOP_Emissive_Shd}
                scale={0.01}
            />
            <mesh
                name="KOP_Steel_Geo_KOP_Steel_Shd_0"
                castShadow
                receiveShadow
                geometry={nodes.KOP_Steel_Geo_KOP_Steel_Shd_0.geometry}
                material={materials.KOP_Steel_Shd}
                scale={0.01}
            />
        </group>
    )
}

useGLTF.preload('/models/car-3d.glb')
