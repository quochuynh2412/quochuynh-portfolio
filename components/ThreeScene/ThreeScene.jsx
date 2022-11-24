import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model } from '../Model/Model'
import styles from './ThreeScene.module.css'
export default function Viewer() {
  const ref = useRef()
  return (
    <div className={styles.canvas}>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
        <Suspense fallback={null}>
          <Stage controls={ref} preset="rembrandt" intensity={1}>
            false
            <Model />
            false
          </Stage>
        </Suspense>
        <OrbitControls ref={ref} autoRotate enableZoom={false} enableRotate={true} />
      </Canvas>
    </div>
  )
}