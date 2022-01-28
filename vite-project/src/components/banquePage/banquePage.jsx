import React from "react";
import {useState} from "react";
import ServiceBanque from "../serviceBanque/serviceBanque";
import ProtoTypes from "prop-types";
import './banquePage.css'

function banquePage() {
    const[sold, setsold]= useState(100);
    
    const change = (dollars)=>{
        setsold(sold+parseInt(dollars))
    }
    

  return (
    <div>
        <h1 className="banquePage-title">Bienvenue dans l'espace client de votre banque</h1>
        <p className="solde">votre solde est :{sold}$</p>
        <h2 className="service-title">Nos services</h2>
        <ServiceBanque sendMsg={change} title1 = "Recharger votre compte" title2= "Virement" title3= "Recharge téléphone"/>
    </div>
    
    )}

    
export default banquePage
