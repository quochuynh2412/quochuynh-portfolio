import { Canvas } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from "react";


const Model = () => {
    const gltf = useLoader(GLTFLoader, "./robot-1.glb")
    return (
        <>
            <primitive  position={[0, 0, 0]} object={gltf.scene} scale={1} />
        </>
    );
};


export default function ThreeScene() {
   return(
      <Canvas>
           <Suspense>
              <Model />
           </Suspense>
      </Canvas>
   )
}
