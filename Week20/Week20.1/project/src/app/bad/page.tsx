"use client"
import { useState } from "react";

export default function Bad(){
    
    const [count,setCount]=useState(0)

    const handleCounter=()=>{
setCount((c)=>c+1)
    }
    return <>
    <h4>BAD</h4>
    <p>
{count}

    </p>
    <button onClick={handleCounter}>COUNTER</button>
    </>
}