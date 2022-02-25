import { useState, useEffect } from "react";
import Row from "../row/Row";
import './AllTheRow.css'
import axios from 'axios'
function AllTheRows() {

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

    let House = ["Gryffindor","Slytherin","Hufflepuff","Ravenclaw"];
    
  return (
  <div>
      <h1 className="text-6xl mx-auto my-0 font-extrabold pt-2 mb-5"> Characters</h1>
     {
        House.map((index)=> (<Row Houserow={index}/>))
     }
  </div>
  )
}

export default AllTheRows;
