import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/robot-1-compressed.glb");
  return (
    <group {...props} dispose={null}>
    </group>
  );
}

useGLTF.preload("/robot-1-compressed.glb");
