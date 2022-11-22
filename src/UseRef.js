import React, { useRef, useState } from "react";


function UseRef(){
    //const [count,setCount]=useState()
    const countRef=useRef()
    //console.log(countRef) // initially countRef value is undefined

    const incref=()=> countRef.current.innerText=Number(countRef.current.innerText)+1
    const decref=()=>countRef.current.innerText=Number(countRef.current.innerText)-1
    const resetref=()=>countRef.current.innerText=0

    return(
        <>
        <h1>Counter-<span ref={countRef}>0</span></h1>
        <button onClick={incref}>+</button>{"  "}
        <button onClick={decref}>-</button>{"  "}
        <button onClick={resetref}>0</button>
        </>
    )
}

export default UseRef