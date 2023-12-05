import React from "react";


const Alert=({type,text})=>{
    return(
        <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
            <div className={`${type === 'danger'?'bg-red-500':'bg-blue-800'} p-2 text-indigo-200 leading-none lg:rounded-full flex lg:inline-flex`}>

            </div>
        </div>
    )
}

export default Alert;