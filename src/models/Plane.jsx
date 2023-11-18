import React from "react"; 
import planeSceen from '../assets/3d/plane.glb';
import { useGLTF } from "@react-three/drei";

const Plane =({isrotating, ...props})=>{
const {scene, animation} = useGLTF(planeSceen);

    return(
        <mesh {...props}>
            <primitive object={scene}/>
        </mesh>
    )

}

export default Plane;