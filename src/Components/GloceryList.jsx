import React, { useEffect,useState } from "react";
import "./GloceryList.css"
import axios from "axios";
import { FaDeleteLeft } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";



function GloceryList(){
    const[handleinput,sethandleinput]=useState("")

    const[vijay,setvijay]=useState([])

    const handlefetch= async()=>{
        // let a=await fetch("http://localhost:3000/todoList")
        // let b =await a.json()
        // setvijay(b)

        let res=await axios.get("http://localhost:3000/todoList")
        // console.log(res)
        setvijay(res.data)

    }
    const handleres=(e)=>{
        sethandleinput(e.target.value)
    }
    const handlepost=()=>{
        console.log(handleinput)
        let body={
            task : handleinput
        }
        let post=axios.post("http://localhost:3000/todoList",body)
        alert("success")
        handlefetch()

    }
    const handledelete=async(id)=>{
        let data=await axios.delete(`http://localhost:3000/todoList/${id}`)
        handlefetch()

    }


    const handleedit= async(a)=>{
        let m= prompt ("enter u text",vijay[a].task)
        let body={
            id:vijay[a].id,
            task:m
        }
        let s=await axios.put(`http://localhost:3000/todoList/${vijay[a].id}`,body)

    
    }




    useEffect(()=>{
        handlefetch()
    },[])


    return(
        <>
        <h1>Glocery list</h1>
        <input onChange={handleres}placeholder="enter u r glocery"></input>
        
        <button onClick={handlepost}>submit</button>

        
            {vijay.map((da,i)=>(
                <div key={i}>

                <h2>{i+1}.{da.task}</h2>

                <span onClick={()=>handledelete(da.id)}><FaDeleteLeft /></span>
                <span onClick={()=>handleedit(i)}><CiEdit /></span>

                </div >
                

            ))}


        


        </>
    )
}

export default GloceryList