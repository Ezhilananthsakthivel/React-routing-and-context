import React from "react";
import { Context } from "./Context";
import Test2 from "./Test2";

function Test1(){
    const fname="Ananth"
    const lname="Sakthi"
    const age="23"
    const city ="Ariyalur"
    return(
        <Context.Provider value={{fname,lname,age,city}}>
        <h1>Test1</h1>
        <Test2/>
        </Context.Provider>
    )
}

export default Test1