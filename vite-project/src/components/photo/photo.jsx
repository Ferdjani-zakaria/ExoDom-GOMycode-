import React from "react";
import './photo.css'
import Image from "../../default-User-Image.png"

const Photo =({srcImg})=>{
    return(
            <img src = {srcImg} alt="user image" className="Photo"/>
        
    )
    
}

Photo.defaultProps = {
    srcImg: Image
}

export default Photo