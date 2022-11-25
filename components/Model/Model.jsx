import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/robot-1-compressed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["Material.001"]}
        position={[-0.15, 2.4, 0]}
        scale={[0.92, 0.92, 0.78]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials["Material.001"]}
        position={[0, 1.67, 0]}
        scale={[1, 1, 0.85]}
      />
      <group position={[0, 1.67, 0]} scale={[1, 1, 0.85]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_2.geometry}
          material={materials["default"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials["Material.003"]}
        position={[0, 1.67, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={materials["Material.001"]}
        position={[0, 1.67, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials["Material.014"]}
        position={[-1.22, 2.3, 0]}
        scale={[1, 1, 0.85]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials["Material.003"]}
        position={[0, 0.58, -1.17]}
        scale={[0.25, 0.25, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials["Material.003"]}
        position={[-0.02, 1.28, -1.17]}
        scale={[0.24, 0.24, 0.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["Material.003"]}
        position={[0, 2.11, -1.17]}
        scale={[0.34, 0.34, 0.37]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={materials["Material.007"]}
        position={[0, 2.19, -1.17]}
        scale={[1, 1, 1.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.007"]}
        position={[-0.24, 1.88, -1.17]}
        scale={[1, 1, 1.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.001"]}
        position={[-0.64, 1.28, -1.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.13, 0.64, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.001"]}
        position={[0.63, 1.28, -1.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.11, 0.22, 0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["Material.001"]}
        position={[0.16, 2.08, -1.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.2, 0.23, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.001"]}
        position={[0, 1.67, -1.17]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials["Material.001"]}
        position={[-0.49, 0.42, -1.17]}
        scale={[0.05, 0.02, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={materials["Material.003"]}
        position={[0, 0.58, 1.17]}
        scale={[0.25, 0.25, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={materials["Material.003"]}
        position={[-0.02, 1.28, 1.17]}
        scale={[0.24, 0.24, 0.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={materials["Material.003"]}
        position={[0, 2.11, 1.17]}
        scale={[0.34, 0.34, 0.37]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={materials["Material.007"]}
        position={[0, 2.19, 1.17]}
        scale={[1, 1, 1.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={materials["Material.007"]}
        position={[-0.24, 1.88, 1.17]}
        scale={[1, 1, 1.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["Material.001"]}
        position={[-0.64, 1.28, 1.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.13, 0.64, 0.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials["Material.001"]}
        position={[0.63, 1.28, 1.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.11, 0.22, 0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials["Material.001"]}
        position={[0.16, 2.08, 1.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.2, 0.23, 0.2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={materials["Material.001"]}
        position={[0, 1.67, 1.17]}
        scale={0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials["Material.001"]}
        position={[-0.49, 0.42, 1.17]}
        scale={[0.05, 0.02, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.007"]}
        position={[0, 1.67, -1.17]}
        scale={[1, 1, 0.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.001"]}
        position={[-0.32, 0.25, -1.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[-0.09, -0.88, -0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["Material.001"]}
        position={[-0.07, 0.15, -1.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.06, 0.26, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["Material.001"]}
        position={[-0.75, 0.23, -1.17]}
        scale={[0.86, 0.86, 1.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={materials["Material.007"]}
        position={[0, 1.67, 1.17]}
        scale={[1, 1, 0.27]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials["Material.001"]}
        position={[-0.32, 0.25, 1.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={[-0.09, -0.88, -0.09]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials["Material.001"]}
        position={[-0.07, 0.15, 1.17]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.06, 0.26, 0.06]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["Material.001"]}
        position={[-0.75, 0.23, 1.17]}
        scale={[0.86, 0.86, 1.3]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={materials["Material.005"]}
        position={[0, 1.67, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={materials["Material.001"]}
        position={[0, 1.67, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials["Material.001"]}
        position={[0, 1.67, 0]}
      />
    </group>
  );
}

useGLTF.preload("/robot-1-compressed.glb");
