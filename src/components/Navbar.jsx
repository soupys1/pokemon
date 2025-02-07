import React from "react";




export default function Navbar({count,high,title}){
    
    
    return(
        <div class="header">
            <div class="left">count : {count}</div>
            <div class="title">{title}</div>
            <div class="right">High Score{high}</div>
        </div>


    )
}