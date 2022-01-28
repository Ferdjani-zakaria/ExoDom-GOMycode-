import React from 'react';
import {useState} from 'react';
import './serviceBanque.css'


function serviceBanque({sendMsg,title1,title2,title3}) {

    const [dollars, setdollars] = useState(0);
    // const [dollars2, setdollars2] = useState(0);
    
    const handleChange = (e) =>{
        setdollars(e.target.value)
    }

    const handleSubmit = (e) =>{
        console.log(dollars)
        sendMsg(dollars)
    }


  return (
        <div className='serviceBanque-container'>
            <div>
                <p className='title'>{title1}</p>
                <input className='serviceBanque-input' type="number" placeholder='montant' onChange={handleChange}/>
                <br />
                <input className='serviceBanque-btn' type="submit" value="Recharger" onClick={handleSubmit}/>

            </div>
            <div>
                    <p className='title'>{title2}</p>
                    <input className='serviceBanque-input' type="number" placeholder='montant'onChange={handleChange}/>
                    <br />
                    <input className='serviceBanque-btn' type="submit" value="Recharger" onClick={handleSubmit}/>
                </div>
            <div>
                    <p className='title'>{title3}</p>
                    <input className='serviceBanque-input' type="number" placeholder='montant'onChange={handleChange}/>
                    <br />
                    <input className='serviceBanque-btn' type="submit" value="Recharger" onClick={handleSubmit}/>
            </div>
        </div>
  )
}

export default serviceBanque
