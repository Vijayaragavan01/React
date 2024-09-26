import React, { useState } from "react";



function ApiCall(){

    const [vijay,setvijay]=useState([])


    const handle = async ()=>{


        let  a = await fetch("https://fakestoreapi.com/products")
        let b= await a.json()
        console.log(b);
        setvijay(b)


    }

    


return(
    <div>
    <h1>Api call</h1>
    <button onClick={handle}>click</button>
    {vijay.map((da)=>(
        <div>
       <h2> {da.title}</h2>

        </div>
    ))}

        
    



    </div>

)
}

export default ApiCall