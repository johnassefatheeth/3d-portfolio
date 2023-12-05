import React, { Suspense, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { Canvas } from "@react-three/fiber";
import Fox from "../models/Fox";
//import { Loader } from "../components/Loader.jsx";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert"
const Contact=()=>{

    const[form,setform]=useState({name:'',email:'',message:''})

    const[isloading,setisloading]=useState(false)

    const [currentAnimation,setCurrentAnimation] =useState('idle')

    const {alert,showAlert,hideAlert} =useAlert();

    const formref=useRef()

    const Handlechange=(e)=>{
        setform({...form,[e.target.name]: e.target.value})

    }
    
    const Handlefocus=()=>{
        setCurrentAnimation('walk')

    }
    const Handleblur=()=>{
        setCurrentAnimation('idle')
    }
    const Handlesubmit=(e)=>{
        e.preventDefault();
        setisloading(true);

        setCurrentAnimation('hit')

        emailjs.send( 
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name :form.name,
                to_name:'John',
                from_email:form.email,
                to_email:'johnassefaforbussines@gmail.com',
                message: form.message
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        ).then(()=>{
            setisloading(false);
            showAlert({show:true, text:'message deliverd',type:'success'})
            

            setTimeout(() => {
                hideAlert({show:true, text:'message failed to be deliverd',type:'danger'})
                setform({name:'',email:'',message:''})
                setCurrentAnimation('idle')
            }, [3000]);
        }).catch((error)=>{
            setisloading(false);
            setCurrentAnimation('idle')
            console.log(error);
        })
    }

    return(
        <section className="rellative flex lg:flex-row flex-col max-container">
            
            {alert.show && <Alert {...alert}/>}
            <Alert/>
            
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">say Hi</h1>
            

            <form onSubmit={Handlesubmit} className="w-full flex flex-col gap-7 mt-14">


                <label htmlFor="" className="text-black-500 font-semibold">
                    Name
                </label>
                <input type="text" name="name" className="input" placeholder="John" required value={form.name}  onChange={Handlechange} onFocus={Handlefocus} onBlur={Handleblur}
                
                />
                <label htmlFor="" className="text-black-500 font-semibold">
                    Your Email
                </label>
                <input type="email" name="email" className="input" placeholder="John@gmail.com" required value={form.email}  onChange={Handlechange} onFocus={Handlefocus} onBlur={Handleblur}
                
                />
                <label htmlFor="" className="text-black-500 font-semibold">
                    Message
                </label>

                <textarea  name="message" className="input" rows={4} placeholder="hi there how are you" required value={form.message}  onChange={Handlechange} onFocus={Handlefocus} onBlur={Handleblur} 
                
                /> 
                 <button
                 type="submit" className="btn" disabled={isloading} onChange={Handlechange} onFocus={Handlefocus} onBlur={Handleblur}>

                    {isloading?'Sending...':'Send'}
                 </button>

            </form>
            </div>
            <div className="lg:w-1/2 w-full lg:h-[550px] h-[350px]">

                <Canvas
                camera={{
                    position:[0,0,5],
                    fov:75,
                    near:0.1,
                    far:1000
                }}
                >
                    <Suspense fallback={null}>
                        <directionalLight intensity={3} position={[0,0,1]}/>
                        <ambientLight intensity={1}/>
                        <pointLight position={[5,10,0]} intensity={2}/>
                        <spotLight position={[10,10,10]} angle={0.15} penumbra={1} intensity={2}/>
                        <Fox
                        currentAnimation={currentAnimation}
                        position={[0.5,0.35,0]}
                        rotation={[12.6,-0.6,0]}
                        scale={[0.6,0.6,0.6]}
                        />


                    </Suspense>

                </Canvas>

            </div>

        </section>

    )
}

export  default Contact;