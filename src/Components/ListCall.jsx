import React, { useState } from "react";
import ApiCall2 from "./ApiCall2";



function ListCall(){

    const[ajith,setajith]=useState(false)

    const bijay=(()=>{
        setajith(true)
    })



    return(
        <>

        {ajith ? null : <ApiCall2/>}
        <button onClick={bijay}>logout</button>

        </>
    )
}

export default ListCall