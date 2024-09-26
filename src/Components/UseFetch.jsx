import React, { useEffect, useState } from "react";
import axios from "axios";


function UseFetch(url){


const[vijay,setvijay]=useState([])

    const handlefetch = async()=>{
        let res=await axios.get(url)
        setvijay(res.data)
    }

    useEffect(()=>{
        handlefetch()
    },[url])
  



    return{vijay}

    
}
export default UseFetch