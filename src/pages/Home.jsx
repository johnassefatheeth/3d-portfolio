import React, { useState,useEffect,useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Island from "../models/island";
import Loader  from "../components/Loader";
import Sky from "../models/Sky";
import Bird from "../models/bird";
import Plane from "../models/plane";
import CircularCameraMotion from "../models/CircularCameraMotion";
import HomeComponent from "../components/HomeComponent";
import sakura from "../assets/sakura.mp3"
import { soundon, soundoff } from "../assets/icons";

const Home= () => {
    const audioRef =useRef(new Audio(sakura))
    audioRef.current.volume=0.05
    audioRef.current.loop=true
    const [isPlayingMusic, setIsPlayingMusic]=useState(true)


    useEffect(()=>{
        if(isPlayingMusic){
            audioRef.current.play()
        }


        return()=>{
            audioRef.current.pause()
        }
    })

    const [isrotating , setisrotating ]= useState(false);


    const [currentstage ,setCurrentStage]=useState(1)


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
            screenposition=[0,-1.5,14]
        }
        else{
            screenscale= [3,3,3];
            screenposition=[0,0, 14];
        }

        return[screenscale,screenposition]
    }


    const [islandScale,islandPosition,islandrotation] = adjustIslandforScreenSize();
    const [planeScale,planePosition]=adjustplaneforScreenSize();
   return(
        <section className="w-full h-screen relative">
              <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                 {currentstage && <HomeComponent currentstage={currentstage} />}
             </div> 
            <Canvas className={`w-full h-screen bg-transparent ${isrotating? 'cursor-grabbing' :'cursor-grab'}`} camera={{near:0.1 , far: 1000}}>
                <Suspense fallback={<Loader/>}>
                    <directionalLight position={[10,10,1]} intensity={2}/>
                    <ambientLight intensity={0.5}/>
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1}/>
                    
                    
                    
                    <Bird/>
                    <Sky
                    isrotating={isrotating}
                    /> 
                    <Island
                    isrotating={isrotating}
                    setisrotating={setisrotating}
                    position={islandPosition}
                    scale={islandScale}
                    rotation={islandrotation}
                    setCurrentStage={setCurrentStage}
                    />
                    <Plane
                    isrotating={isrotating}
                    planeScale={planeScale}
                    planePosition={planePosition}
                    rotation={[0,20,0]}

                    />
                </Suspense>
            </Canvas>

            <div className="absolute bottom-2 left-2 ">
                <img src={!isPlayingMusic?soundoff :soundon} alt="sonund" 
                className="w-10 h-10 cursor-pointer object-contain"
                 onClick={()=>setIsPlayingMusic(!isPlayingMusic)}
                />
            </div>

        </section>
   )
}

export  default Home;