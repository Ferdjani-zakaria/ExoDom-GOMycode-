import React from "react";
import './userContainer.css'
import Card from '../card/card.jsx'


const UserContainer=()=>{
    return(
        <div className="userContainer-container">
            <Card p1="aek"/>
            <Card p1="afaf" p2="teacher"/>
            <Card p1="Aness"/>
            <Card p1="Akram"/>
            <Card p1="Lyes"/>
           
            
        </div>
        
    )
   
}

export default UserContainer