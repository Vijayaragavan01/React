import React, { useEffect, useState } from "react";
import axios from "axios";



function GetPost(){
    const[vijay,setvijay]=useState()


    const handlefetch=async ()=>{
        let res=await axios.get("http://localhost:3000/todoList")
        setvijay(res.data)

    }
    useEffect(()=>{
        handlefetch()
    },[])

    let a=(e)=>{
        console.log(e.target.value)
        setvijay(e.target.value)

    }
    const handlepost=()=>{
        let body={
            task:vijay
        }
        let post=axios.post("http://localhost:3000/todoList",body)
        alert("success")
        handlefetch()

    }





    return(
        <>
        <h1>
            Getpost
        </h1>
        <input onChange={a} placeholder="enter u r glocery"/>

        <button onClick={handlepost}>submit</button>


        {vijay.map((da,i)=>(
            <div key ={i}>
               <h2> {i+1}.{da.task}</h2>


            </div>
        ))}
        
            
        
        </>
    )
}
export default GetPost