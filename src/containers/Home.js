import React from "react"
import Register from "../components/Register"

function Home({history}){
    const back=()=>{
        history.goBack()
    }
    const forward=()=>{
        history.goForward()
    }
    return(
        <>
        <button onClick={back}>Go Back</button>{" "}
        <button onClick={forward}>Go Forward</button>
        <Register/>
        </>
    )
}

export default Home