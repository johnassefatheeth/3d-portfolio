import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

//  {/* <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
//                 check
//             </div> */}
const Home= () => {
   return(
        <section className="w-full h-screen relative">
           
            <h1>working</h1>
            <Canvas className="w-full h-screen bg-transparent" camera={{near:0.1 , far: 1000}}>
                <Suspense fallback={<Loader/>}>
                    <directionalLight/>
                    <ambientLight/>
                    <pointLight/>
                    <spotLight/>
                </Suspense>
            </Canvas>

        </section>
   )
}

export  default Home;