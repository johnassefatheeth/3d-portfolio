import React, { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';

extend({ PerspectiveCamera });

const CircularCameraMotion = () => {
  const cameraRef = useRef();

  useFrame((state, delta) => {
    // Update the camera position in a circular motion
    const elapsedTime = state.clock.getElapsedTime();
    const radius = 5;
    const centerX = 0;
    const centerY = 0;
    const angle = elapsedTime * 0.5; // Adjust speed by changing the multiplier

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    const z = 13; // Adjust the camera's height

    cameraRef.current.position.set(x, y, z);
    cameraRef.current.lookAt(centerX, centerY, 0); // Look at the center of the scene
  });

  return (
    <PerspectiveCamera
      makeDefault
      ref={cameraRef}
      position={[10, 10, 3]} // Initial camera position
      fov={75}
      aspect={window.innerWidth / window.innerHeight}
      near={0.1}
      far={100}
    />
  );
};

export default CircularCameraMotion;
