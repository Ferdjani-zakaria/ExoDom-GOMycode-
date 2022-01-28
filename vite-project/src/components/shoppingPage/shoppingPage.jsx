import {useState} from 'react';
import './shoppingPage.css'
import ProductContainer from '../productContainer/productContainer';


function shoppingPage() {
  
    return (
        <div>
            <h1>Ecoommerce Site Web</h1>
            <div className='shoppingPage-solde'>
                <div >
                    <h2>Solde</h2>
                    <p>2000 euro</p>
                </div>
                <div>
                    <h2>PANIER</h2>
                    <p>0</p>
                </div>
                <button className='shoppingPage-btn'>Confirmer la commande</button>

            </div>
            <div className='div-container-of-productContainer'>
                <ProductContainer/>
            </div>

        </div>
  )
}

export default shoppingPage;
