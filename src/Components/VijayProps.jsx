import React from "react"



function VijayProps(props){
    return(
        <>
        
         {props.names.map((a)=>(
            <h1>{a}</h1>
         ))}
        </>
    )
}

export default VijayProps


