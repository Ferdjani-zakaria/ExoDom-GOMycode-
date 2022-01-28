import React from 'react'
import PropTypes from 'prop-types'
import './card.css'
import Photo from '../photo/photo.jsx'
import img from '../../default-User-Image.png'
function Card ({srcImg ,p1,p2, p3}) {
    const handel = () =>{
        alert(p1)
    }
    return (
        <div className='card-container'>
            <Photo srcImg={srcImg} className="profil" />
            <p className="card-p1">{p1}</p>
            <p className="card-p2">{p2}</p>
            <p className="card-p3">{p3}</p>
            <button className="card-button" onClick={handel}>Click</button>
        </div>
    )
}

Card.propTypes = {
    p1 : PropTypes.string.isRequired,
    p2 : PropTypes.string.isRequired,
    p3 : PropTypes.string.isRequired,
}

Card.defaultProps = {
    srcImg: img,
    p1: "Name of the user",
    p2: "Position of the user",
    p3: "Description of the user" 
}

export default Card





