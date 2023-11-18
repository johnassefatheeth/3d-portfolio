import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Island from "../models/island";
import Loader  from "../components/Loader";
import Sky from "../models/sky";
import Bird from "../models/bird";
import Plane from "../models/plane";
//  {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
//                 check
//             </div> */}
const Home= () => {
    const [isrotating , setisrotating ]= useState(false);

    const adjustIslandforScreenSize=()=>{

        let screenscale = null;
        let  screenposition=[0,-6.5 ,-43];
        let rotation=[0.1,4.7,0]

        if(window.innerWidth < 768 ){
            screenscale = [0.9 ,0.9 , 0.9];
        }
        else{
            screenscale= [1,1,1];
        }

        return[screenscale,screenposition,rotation]
    }


    const adjustplaneforScreenSize=()=>{

        let screenscale ,screenposition;

        if(window.innerWidth < 768 ){
            screenscale = [1.5 ,1.5 , 1.5];
            screenposition=[0,-1.5,0]
        }
        else{
            screenscale= [3,3,3];
            screenposition=[0,0,-4];
        }

        return[screenscale,screenposition]
    }


    const [islandScale,islandPosition,islandrotation] = adjustIslandforScreenSize();
    const [planeScale,planePosition]=adjustplaneforScreenSize();
   return(
        <section className="w-full h-screen relative">
           
            <Canvas className={`w-full h-screen bg-transparent ${isrotating? 'cursor-grabbing' :'cursor-grab'}`} camera={{near:0.1 , far: 1000}}>
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[10,10,1]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000 " intensity={1}/>
                    
                    
                    <Bird/>
                    <Sky/> 
                    <Island
                    isrotating={isrotating}
                    setisrotating={setisrotating}
                    position={islandPosition}
                    scale={islandScale}
                    rotation={islandrotation}
                    
                    />
                    <Plane
                    isrotating={isrotating}
                    scale={planeScale}
                    position={planePosition}
                    rotation={[0,20,0]}

                    />
                </Suspense>
            </Canvas>

        </section>
   )
}

export  default Home;