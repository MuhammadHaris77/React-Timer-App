import React, { useEffect, useState } from "react";

function DigiClock(){
const getTime =new Date().toLocaleTimeString()
const getdate = new Date().toLocaleDateString()
const [time,setTime]= useState(getTime)

useEffect(()=>{
    const UpdateTime=()=>{
        setTime(getTime)
    }
    
    setTimeout( UpdateTime, 1000);
    
})


    return <div>
    <h1>DIGITAL CLOCK</h1>
       <h1>{time}</h1>
       <h1>{getdate}</h1>
   
    </div>
}

export default DigiClock ;