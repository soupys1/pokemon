import { useState, useEffect } from 'react';
import Cards from './Cards';


export default function Images({i, handleSetCount,setTitle,handleReset,shuffleCards}){
    
    const url = `https://pokeapi.co/api/v2/pokemon/${i+15}/`;
    const [photos , setPhotos] = useState({name:'', image:''});

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data) =>{
            console.log(data);
            const name = data.name;
            const image = data.sprites.front_default
            setPhotos({name,image});
        }).catch((err) =>{
            console.error(err);
        });
    },[url]);
    return(
        <Cards photos= {photos} handleSetCount={handleSetCount} i={i} setTitle ={setTitle} handleReset={handleReset} shuffleCards={shuffleCards}/>
    )
}