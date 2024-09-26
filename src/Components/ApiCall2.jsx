import React, { useEffect, useState } from "react";



function ApiCall2 (){

    const[vijay, setvijay]=useState(0)

    const handle = () =>{
        setvijay(vijay + 1)
    }


    useEffect(()=>{
        console.log("arun");
        // return(
        //     console.log("unmounting")
        // )
    },[vijay]);

    

return(
    <>
    <h1>{vijay}-0</h1>
    <button onClick={handle}>add</button>

    </>

)}



export default ApiCall2