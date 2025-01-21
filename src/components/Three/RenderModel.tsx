import { cn } from '@/utils/classes'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, PropsWithChildren, useEffect, useRef } from 'react'

const RenderModel = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const handleResize = () => {
            const camera = canvasRef.current?.getContext('webgl')?.canvas;
            if (camera) {
                camera.width = window.innerWidth;
                camera.height = window.innerHeight;
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <Canvas
            ref={canvasRef}
            className={cn('w-screen h-screen bg-transparent z-10 relative', className)}
            camera={{ position: [0, 0, 5] }}
            gl={{ alpha: true }}
        >
            <Suspense fallback={null}>
                {children}
            </Suspense>
        </Canvas>
    )
}

export default RenderModel