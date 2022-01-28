import React from 'react';
import ProductCard from '.././productCard/productCard.jsx'
import './productContainer.css'
function productContainer() {
  return (
  <div className="productContainer-container">
            <ProductCard p1="pc portable McBook 2019" p2 ={102}/>
            <ProductCard p1="IPhone 12 RED" p2 ={122}/>
            <ProductCard p1="Galaxy S8" p2 ={60}/>
            <ProductCard p1="pc portable MacBook 2021" p2 ={122}/>
            <ProductCard p1="IPhone 12 RED" p2 ={122}/>
            <ProductCard p1="Galaxy S12 RED" p2 ={99}/>      
            <ProductCard p1="pc portable McBook 2020" p2 ={112}/>      
            <ProductCard p1="IPhone 11" p2 ={112}/>      
            <ProductCard p1="Galaxy S7" p2 ={55}/>      
        </div>
        
   
  )
}

export default productContainer;
