import React from 'react'
import './nav.css';
import logo from '../../logo.svg'

const Nav =()=>{
    return(
        <div className='nav-container'>
            <div>
                <h2 className='blackLive'>Black Lives Matter. Soutenez la Equal Justice Initiative.</h2> 
            </div>

            <div className='navBar'>
            <div className='navBar-left'>
                <img src={logo} alt="" className='logo'/>
                <a href="#">React</a>
            </div>
            <div className = 'in-nav'>
                <a href="#">Docs</a>
                <a href="#">Tutoriel</a>
                <a href="#">Blog</a>
                <a href="#">Communauté</a>
            </div>
            <div className='in-nav'>
                <input type="text" />
                <a href="#">v17.0.2</a>
                <a href="#">Langue</a>
                <a href="#">Github</a>
            </div>
            

            
        </div>   
    </div>
    )
}
export default Nav 