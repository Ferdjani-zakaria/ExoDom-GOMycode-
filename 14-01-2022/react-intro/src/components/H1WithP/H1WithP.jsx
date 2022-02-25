import React from "react";
import './H1WithP.css'


const H1WithP =(props)=>{
    return(
    <div className="container2">
        <h1>{props.title}</h1>
        <p>{props.para1}</p>
        <p>{props.para2}</p>
    </div>
    )
}

export default H1WithP