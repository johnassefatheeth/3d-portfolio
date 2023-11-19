import React from "react";



const renderContent={
    1:(
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>John</span>
        👋
        <br />
        A Software Engineer from Ethiopia
      </h1>
    ),
    2:(
        <h1>2</h1>
    ),
    3:(
        <h1>3</h1>
    ),
    4:(
        <h1>4</h1>
    )
}

const infoBox =({text,link,btntext})=>{
    <div className="info-box">
        {text}
    </div>
}

const HomeComponent =({currentstage})=>{
    return renderContent[currentstage] || null;
    
}

export default HomeComponent;