import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Environment, OrbitControls } from '@react-three/drei'
import React, { Suspense, useRef } from 'react'
import styles from './ThreeScene.module.css'

function Robot(props) {
    const { scene } = useGLTF('/robot-1-compressed.glb')
    return <primitive object={scene} {...props} />
}

export default function Model() {
    const ref = useRef();
    return (
        <div className={styles.canvas}>
            <Suspense fallback={<div className="center">loading</div>}>
                <Canvas shadows dpr={[1, 2]} camera={{ position: [3, 3, 3], fov: 50 }}>
                    <ambientLight intensity={0.5} />
                    <Robot position={[0, -0.9, 0]} scale={0.7} />
                    <Environment preset="city" />
                    <OrbitControls ref={ref} autoRotate enableZoom={false} enableRotate={true} autoRotateSpeed={4.0} />
                </Canvas>
            </Suspense>
        </div>
    )
}
