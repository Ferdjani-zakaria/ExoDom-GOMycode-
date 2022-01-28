import React from 'react';
import './productCard.css'
function productCard({p1,p2}) {
  return (
    <div className='productcard-container'>
        {/* <Photo srcImg={srcImg} className="profil" /> */}
        <p className="productcard-p1">{p1}</p>
        <p className="productcard-p2">{p2} euro</p>
        <button className="productcard-btn">Ajouter au panier</button>
    </div>
)
}

export default productCard;
