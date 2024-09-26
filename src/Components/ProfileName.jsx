import React, { useState } from "react";
// import "./Profilecss"
import "./king.css"



function ProfileName(){

    const[count,setcount]=useState([
        {
            id: 1,
            name: 'Bertie Yates',
            age: 29,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
          },
          {
            id: 2,
            name: 'Hester Hogan',
            age: 32,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
          },
          {
            id: 3,
            name: 'Larry Little',
            age: 36,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
          },
          {
            id: 4,
            name: 'Sean Walsh',
            age: 34,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
          },
          {
            id: 5,
            name: 'Lola Gardner',
            age: 29,
            image:
              'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
          },
        
       


        
    
        
    ]);


    return(
        <div className="bg">

            <div className="a1">
        <h1 className="a2">{count.length}List of birthday</h1>
    
        {count.map((ch)=>(
             <img src ={ch.image} className="a3"/>
             
             
             
        ))}

          <div className="a4">
            
            {count.map((ss)=>(
                <h2>{ss.name}
                {ss.age}years
                </h2>

            ))}
          
        

        </div> 
        

      
        
    
        



        </div>

       
      



        </div>
    )

}
export default ProfileName


