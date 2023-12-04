import React, { useState } from "react";

const Contact=()=>{

    const{form,setform}=useState({name:'',email:'',message:''})

    const{isloading,setisloading}=useState(false)

    const formref=useState(null)

    const Handlechange=(e)=>{
        setform({...form,[e.target.name]: e.target.value})

    }
    
    const Handlefocus=()=>{

    }
    const Handleblur=()=>{

    }
    const Handlesubmit=(e)=>{
        e.preventDefault();
        setisloading(true);
    }

    return(
        <section className="rellative flex lg:flex-row flex-col max-container">
            <div className="flex-1 min-w-[50%] flex flex-col">
                <h1 className="head-text">say Hi</h1>
            </div>

            <form onSubmit={Handlesubmit} className="w-full flex flex-col gap-7 mt-14">


                <label htmlFor="" className="text-black-500 font-semibold">
                    Name
                </label>
                {/* <input type="text" name="name" className="input" placeholder="John" required value={form.name} onChange={Handlechange} onFocus={Handlefocus} onBlur={Handleblur}
                
                /> */}
                <label htmlFor="" className="text-black-500 font-semibold">
                    Your Email
                </label>
                {/* <input type="email" name="email" className="input" placeholder="John@gmail.com" required value={form.email} onChange={Handlechange} onFocus={Handlefocus} onBlur={Handleblur}
                
                /> */}
                <label htmlFor="" className="text-black-500 font-semibold">
                    Message
                </label>

                {/* <textarea  name="message" className="input" rows={4} placeholder="hi there how are you" required value={form.message} onChange={Handlechange} onFocus={Handlefocus} onBlur={Handleblur} */}
                
                {/* /> */}
                 <button
                 type="submit" className="btn" disabled={isloading} onChange={Handlechange} onFocus={Handlefocus} onBlur={Handleblur}>

                    {isloading?'Sending...':'Send'}
                 </button>

            </form>
        </section>

    )
}

export  default Contact;