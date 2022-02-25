import {userstate} from 'react';
import './navBar.css'
function navBar() {
  return( 
  <div className='navBar-container'>
      <ul className='navBar-ul-container'>
          <li className='li-navBar'>00 HOME</li>
          <li className='li-navBar'>01 DESTINATION</li>
          <li className='li-navBar'>02 CREW</li>
          <li className='li-navBar'>03 TECHNOLOGY</li>
      </ul>
  </div>
  )
}

export default navBar;
