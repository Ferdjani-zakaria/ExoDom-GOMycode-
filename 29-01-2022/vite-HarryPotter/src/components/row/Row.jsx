import { useState, useEffect } from "react";
import axios from 'axios'
import './Row.css'

function Row ({Houserow}){
    // const data = [1,2,3,4,5];

    const [data, setData]= useState([]);
    useEffect(
        
        ()=>{
        const fetchData= async()=>{
            const response = await axios.get("http://hp-api.herokuapp.com/api/characters")
            setData(response.data)

        }
        fetchData()
    },[]
        
        )   

return(
    <div className="h-96 flex flex-col gap-1">
            <div className="flex">
                <h1 className="text-2xl font-bold pl-3 text-white font-bold">{Houserow}</h1>
            </div >
            <div className="flex justify-between align-center overflow-x-scroll gap-1.5 h-full px-8">
                {   data.map(
                    (element,index)=>  ( element.house == Houserow &&
                        (<div className="flex align-center flex-col h-full cursor-pointer w-40" key={index}>
                            <img className="rounded-lg h-72" src={element.image} alt={element.name} />
                            <h1 className="m-0 text-base font-semibold h-2 font-sans" style={{ width:180}}>{element.name}</h1>
                        </div>)
                    )
                )}
            </div>

    </div>
        )

}

export default Row; 