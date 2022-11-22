import React, { useContext } from "react";
import { Context } from "./Context";

function Test3(){
    const {fname,lname,age,city}=useContext(Context)
    console.log(fname,lname,age,city)
    return(
        <h3>Test3</h3>
    )
}

export default Test3