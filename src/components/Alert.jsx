import React from "react";


const Alert=({type,text})=>{
    return(
        <div className="absolute top-10 left-0 right-0 flex justify-center items-center">
            <div className={`${type === 'danger'?'bg-red-800':'bg-blue-800'} p-2 text-indigo-200 leading-none lg:rounded-full flex lg:inline-flex`}>
                <p className={`${type==='danger'?'bg-red-500':'bg-blue-500'} flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}>{type ==='danger'?'failed':'success'}</p>
                <p className="mr-2 text-left"></p>
            </div>
        </div>
    )
}

export default Alert;