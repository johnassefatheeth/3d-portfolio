import React from "react";
import { useState } from "react";

const useAlert =()=>{
    const [alert,setAlert]=useState({show:false, text:'', type:'danger'})
     

    const showAlert=({text,type='danger'})=>setAlert({
        show:true,
        text,
        type
    }) 
    const hideAlert=({text,type='danger'})=>setAlert({
        show:false,
        text,
        type
    })    
    return(
        <div>useAlert</div>
    )
}

export default useAlert;