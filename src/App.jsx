import React from "react";
import Navbar from "./components/Navbar";
import "./App.css"; 
import Images from "./components/Images";
import { useState,useEffect } from "react";

const App = () => {
  
  const [title, setTitle] = useState('Welcome to pokedex');
  const [count , setCount] = useState(0);
  const [high, setHigh] = useState(0);
  const [initialCards] = useState(() => shuffleCards([...Array(20)].map((_, i) => i + 1)));
  const [cards, setCards] = useState(initialCards);

            
        function handleSetCount(){
          setCount((prevCount) => prevCount + 1)
        }
        useEffect(()=>{
          if (count > high){
            setHigh(count);

          }else{
            setHigh(high);
          }
        },[count]);

        function handleReset(){
          setCount(0);
          setTitle("You lost ,Try again");
          setHigh((prevHigh) => prevHigh);
          setCards(initialCards);
        }

        useEffect(()=>{
          if(count ===20){
            setTitle("you have won lfgggg");
          }
        },[count]);

        function shuffleCards(array){
          let newArray = [...array];
          for (let i = newArray.length-1;i > 0 ;i--){
            let j = Math.floor(Math.random() * (i+1));
            [newArray[i], newArray[j]] = [newArray[j],newArray[i]];
          }
          return newArray;
        };
        
        
  return (
    <>
        <Navbar count={count} high={high} title = {title}/>
        <div className="card-container">

         {
          cards.map((id)=>(
            <Images key={id} 
                    i ={id} 
                    handleSetCount={handleSetCount} 
                    count={count} 
                    setTitle = {setTitle} 
                    handleReset={handleReset} 
                    shuffleCards={()=>{setCards(shuffleCards(cards))}}
            />
          ))
          
         }
        </div>
        
        
        
    </>
    
    
  );
};

export default App;
