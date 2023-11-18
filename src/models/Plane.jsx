import React, { useEffect, useRef } from "react"; 
import planeScene from '../assets/3d/plane.glb'; // Corrected import name
import { useAnimations, useGLTF } from "@react-three/drei";

const Plane = ({ isrotating, ...props }) => { // Corrected prop naming convention
    const ref = useRef();
    const { scene, animations } = useGLTF(planeScene); // Corrected destructuring
    const { actions } = useAnimations(animations, ref); // Corrected argument

    useEffect(() => {
        if (isrotating) {
            actions['Take 001'].play();
        } else {
            // actions['Take 001'].stop();
        }
    }, [actions, isrotating]);

    return (
        <mesh {...props} ref={ref} position={[0,0,-4]} scale={[3,3,3]}>
            <primitive object={scene} />
        </mesh>
    );
};

export default Plane;
