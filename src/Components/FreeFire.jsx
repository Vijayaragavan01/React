import React, { useState } from "react";
import Subname from "./SubName";



function FreeFire(){
// Hook
// const [vijay,setvijay]= useState(2)

  // const a=()=>{
    
  //    console.log("vijayaragavan");
  // }
// const a=()=>{
//   setvijay(vijay + 1)
// }

const [vijay,setvijay]=useState("ajith")

const a=()=>{
  setvijay("luufy")

if(vijay == "ajith")
{
  
  setvijay("luufy")
}
else {

  setvijay("ajith")
}}
    return(
        <>
      <h2>Ticket counter-{vijay}</h2>  

      <button onClick={a}>Add num</button>
      <Subname/>
        </>
    )
}

export default FreeFire