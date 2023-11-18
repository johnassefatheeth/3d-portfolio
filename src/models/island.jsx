import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame,useThree } from "@react-three/fiber";

import lslandScene from '../assets/3d/island.glb'
import { a } from "@react-spring/three";

const Island =({isrotating,setisrotating,setCurrentStage, ...props})=> {
  
  
  const islandRef =useRef();
  const { nodes, materials } = useGLTF(lslandScene);
  
  const {gl,viewport}= useThree();
  const lastX=useRef(0);
  const rotationspeed =useRef(0);
  const dampeningFactor =0.95;

  const handlepointerdown=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    setisrotating(true);


    const clientX = e.touches?e.touches[0].clientX:e.clientX
    lastX.current=clientX;
  
  }

  const handlepointerup=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    setisrotating(false); 
  }
  const handlepointermove=(e)=>{
    e.stopPropagation();
    e.preventDefault();
    


    if(isrotating){
      const clientX = e.touches?e.touches[0].clientX:e.clientX
      const delta =(clientX-lastX.current )/viewport.width;
  
      islandRef.current.rotation.y += delta * 0.01 *Math.PI;
      lastX.current=clientX;
      rotationspeed.current=delta*0.01 *Math.PI;
    }
  }

const handlekeydown=(e)=>{
  if(e.key === 'ArrowLeft'){
    if(!isrotating) setisrotating(true);
    islandRef.current.rotation.y +=0.01*Math.PI;
  }
  else if(e.key === 'ArrowRight'){
    if(!isrotating) setisrotating(true);
    islandRef.current.rotation.y -=0.01*Math.PI;

  }
}

const handlekeyup=(e)=>{
  if(e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
   setisrotating(false);
  }
}

useFrame(()=>{
  if(!isrotating){
    rotationspeed.current *=dampeningFactor;

    if(Math.abs(rotationspeed.current)<0.0001){
      rotationspeed.current=0;
    }


    islandRef.current.rotation.y += rotationspeed.current
    }else{
      const rotation=islandRef.current.rotation.y;
       /**
       * Normalize the rotation value to ensure it stays within the range [0, 2 * Math.PI].
       * The goal is to ensure that the rotation value remains within a specific range to
       * prevent potential issues with very large or negative rotation values.
       *  Here's a step-by-step explanation of what this code does:
       *  1. rotation % (2 * Math.PI) calculates the remainder of the rotation value when divided
       *     by 2 * Math.PI. This essentially wraps the rotation value around once it reaches a
       *     full circle (360 degrees) so that it stays within the range of 0 to 2 * Math.PI.
       *  2. (rotation % (2 * Math.PI)) + 2 * Math.PI adds 2 * Math.PI to the result from step 1.
       *     This is done to ensure that the value remains positive and within the range of
       *     0 to 2 * Math.PI even if it was negative after the modulo operation in step 1.
       *  3. Finally, ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI) applies another
       *     modulo operation to the value obtained in step 2. This step guarantees that the value
       *     always stays within the range of 0 to 2 * Math.PI, which is equivalent to a full
       *     circle in radians.
       */
       const normalizedRotation =
       ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

     // Set the current stage based on the island's orientation
     switch (true) {
       case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
         setCurrentStage(4);
         break;
       case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
         setCurrentStage(3);
         break;
       case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
         setCurrentStage(2);
         break;
       case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
         setCurrentStage(1);
         break;
       default:
         setCurrentStage(null);
     }
    }
  }
)


  useEffect(()=>{
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown',handlepointerdown);
    canvas.addEventListener('pointerup',handlepointerup);
    canvas.addEventListener('pointermove',handlepointermove);
    document.addEventListener('keydown',handlekeydown);
    document.addEventListener('keyup',handlekeyup);

    return()=>{
      canvas.removeEventListener('pointerdown',handlepointerdown)
      canvas.removeEventListener('pointerup',handlepointerup)
      canvas.removeEventListener('pointermove',handlepointermove)
      document.removeEventListener('keydown',handlekeydown);
      document.removeEventListener('keyup',handlekeyup);
    }


  },[gl,handlepointerdown,handlepointermove,handlepointerup])


  
  return (
    <a.group ref={islandRef} {...props} >
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}


export default Island;
