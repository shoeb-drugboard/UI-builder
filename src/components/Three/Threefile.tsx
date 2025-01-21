import React, { useEffect } from 'react'
import * as THREE from 'three';

const Threefile = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const scene = React.useMemo(() => new THREE.Scene(), []);
    const camera = React.useMemo(() => {
        const cam = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000); // Update far plane to 1000
        scene.add(cam);
        return cam;
    }, [scene]);

    const box = React.useMemo(() => {
        const boxGeometry = new THREE.BoxGeometry();
        const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        return new THREE.Mesh(boxGeometry, boxMaterial);
    }, []);

    useEffect(() => {
        if (canvasRef.current) {
            const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.position.z = 5;
            scene.add(box);

            const animate = () => {
                requestAnimationFrame(animate);
                box.rotation.x += 0.01;
                box.rotation.y += 0.01;
                renderer.render(scene, camera);
            }
            animate();

            const handleResize = () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            }

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
                renderer.dispose();
            }
        }
    }, [box, camera, scene]);

    return (
        <canvas id="canvas" ref={canvasRef}></canvas>
    )
}

export default Threefile