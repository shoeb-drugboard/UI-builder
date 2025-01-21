import React from 'react';
import { Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

interface ProjectCardProps {
    position: [number, number, number];
    rotation: [number, number, number];
    title: string;
    description: string;
    technology: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ position, rotation, title, description, technology }) => {
    const meshRef = useRef(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <group position={position} rotation={rotation}>
            <mesh ref={meshRef} castShadow receiveShadow>
                <boxGeometry args={[3, 4, 0.2]} />
                <meshStandardMaterial color="#1e1e1e" metalness={0.5} roughness={0.5} />
                <meshStandardMaterial attach="material" color="#1e1e1e" />
            </mesh>

            {/* Project Title */}
            <Text
                position={[0, 1.5, 0.25]}
                fontSize={0.4}
                color="white"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.02}
                outlineColor="#ff6900"
            >
                {title}
            </Text>

            {/* Project Description */}
            <Text
                position={[0, 0.5, 0.25]}
                fontSize={0.2}
                color="white"
                maxWidth={2.5}
                textAlign="center"
                anchorX="center"
                anchorY="middle"
                outlineWidth={0.01}
                outlineColor="#ff6900"
            >
                {description}
            </Text>

            {/* Technology Stack */}
            <Text
                position={[0, -1, 0.25]}
                fontSize={0.15}
                color="#ff6900"
                anchorX="center"
                anchorY="middle"
            >
                {technology}
            </Text>
        </group>
    );
};

export default ProjectCard;