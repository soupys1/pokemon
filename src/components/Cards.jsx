    import React, { useEffect } from "react";
    import { useState } from "react";
    import Navbar from "./Navbar";


    export default function Cards({photos,handleSetCount,i,setTitle,handleReset,shuffleCards}){
        
        const [indCount, setIndCount] = useState(0);

        

        function handleSetIndCount(){
            setIndCount (prevInd => prevInd+1);
        }

        useEffect(()=>{
            if(indCount > 1){
                
                handleReset();
                setIndCount(0);
                
            }

            
        },[indCount,setTitle,handleReset]);
        
        
        

        function myFunction(){
            handleSetIndCount()
            handleSetCount();
            shuffleCards();
            
            
        }
        return(
            <div className="card" onClick={myFunction}>
                <div><img  src={photos.image}  alt={photos.name}/></div>
                
            </div>
        )
    }