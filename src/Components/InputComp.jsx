import React, { useState } from "react";



function InputComp(){


const[mani,setmani] = useState("")
const[jai,setjai] = useState(" ")

const handle=(event)=>{
    console.log(event.target.value)
    setmani(event.target.value)
}

    const ajay=(e)=>{
        console.log(e.target.value)
        setjai(e.target.value) 
    


}

    return(
        <>
        <h1>Input={mani}</h1>
        <input onChange={handle} placeholder="enter u r name"/>
        <input onChange={ajay} placeholder="enter u email"/>
        
        </>
    )
}

export default InputComp