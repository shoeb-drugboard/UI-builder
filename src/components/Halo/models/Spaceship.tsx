import * as THREE from 'three'
import React, { useRef, useMemo, memo } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
    nodes: {
        Cube__0: THREE.Mesh
    }
    materials: {
        ['Scene_-_Root']: THREE.MeshToonMaterial
    }
}

export const Spaceship = memo((props: JSX.IntrinsicElements['group']) => {
    const spaceRef = useRef<THREE.Group>(null);

    const { nodes, materials } = useGLTF('/models/space_ship-transformed.glb') as GLTFResult;


    useFrame((state) => {
        if (!spaceRef.current) return;
        const time = state.clock.elapsedTime;
        spaceRef.current.rotation.y = time * 0.5;
    });
    const meshProps = useMemo(() => ({
        name: "Cube__0",
        castShadow: true,
        receiveShadow: true,
        geometry: nodes.Cube__0.geometry,
        material: materials['Scene_-_Root'],
        position: [0, 0, -1.35] as [number, number, number],
        rotation: [0.2, 0, 0.2] as [number, number, number],
        scale: 0.01
    }), [nodes, materials]);

    return (
        <group
            {...props}
            dispose={null}
            ref={spaceRef}
        >
            <mesh {...meshProps} />
        </group>
    );
});

Spaceship.displayName = 'Spaceship';

useGLTF.preload('/models/space_ship-transformed.glb');
