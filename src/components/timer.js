import React, { useEffect, useState } from "react";

function Timer(){

const [seconds,setSeconds]=useState(0);
const [minutes,SetMinutes]=useState(0);
useEffect(()=>{
    const timer =setInterval(()=>{
        setSeconds(seconds+1);

        if(seconds===59){
            SetMinutes(minutes+1)
            setSeconds(0)
        }
        
    },1000)

 return (()=> clearInterval(timer));
})

const restart=()=>{
    SetMinutes(0)
    setSeconds(0)
}
    return (
        <div>
            <h1>TIMER</h1>
            <h2>Seconds: {seconds<10?`0${seconds}`:seconds}</h2>
            <h2>Minutes : {minutes<10?`0${minutes}`:minutes}</h2>
            <button onClick={restart}>Restart</button> 
        </div>
    )
}

export default Timer;