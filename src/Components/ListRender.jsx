import React,{useState} from "react";



function ListRender(){

    const [vijay,setvijay]=useState([
    {
        Name:"ajith",
        age:25,
        role:"webdev",
        image:"data:image/webp;base64,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"
    },

    {
        Name:"sanju",
        Age:24,
        Role:"Uix",

    },
    {
        Name:"vasu",
        Age:26,
        role:"javadev",
    },
    ])

    return(
        <div>
            
        <h1>student</h1>

        {vijay.map((ch)=>(
        <ol>
            <li>{ch.Name}</li>
            <img src={ch.image}></img>
        </ol>
        

        


    
            
       

            


       ) )}

        </div>

    )
}


export default ListRender;