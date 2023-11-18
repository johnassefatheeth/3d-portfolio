import React from "react"; 
import { useGLTF } from "@react-three/drei";
import skyScene from '../assets/3d/sky.glb';
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Sky =( {isrotating})=>{
    const sky = useGLTF(skyScene);
    const skyref= useRef();

    useFrame((_,delta)=>{
        if(isrotating){
            skyref.current.rotation.y += 0.08*delta;
        }
    })
    return(
        <mesh ref={skyref}>
            <primitive object={sky.scene} />
        </mesh>
    )

}

export default Sky;