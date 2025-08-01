'use client';
import { useState } from "react";

export default function Counter(){
    const [count,setCount] = useState(0);

    return (
        <>
        <div><button onClick={()=> setCount(count+1)}>Click {count} </button></div>
        <style jsx>{`
            div{
                text-align:center;
                margin:40%;
            }
        `}</style>
        </>
    )

}