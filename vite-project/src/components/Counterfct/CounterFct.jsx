import {useState} from "react";
import '../counter/Counter.css';


const CounterFct = () => {
   const[state, setcounter]= useState(0);
  return(
    <div>
        <h1>{state}</h1>
        <button className="btn" onClick={()=>setcounter(state - 1)}>Remove</button>
        <button className="btn" onClick={()=>setcounter(state + 1)}>Add</button>
    </div>
  ) 
}

export default CounterFct
