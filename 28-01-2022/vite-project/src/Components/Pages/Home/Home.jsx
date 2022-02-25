import {useState} from 'react';
import './Home.css'
import NavBar from '../../navBar/NavBar.jsx';
function Home() {
  return (
  <div className='Home-container'>
      <NavBar />
      <div className='Home-txt'>
        <p>SO, YOU WANT TO TRAVEL TO</p>
        <h1>SPACE</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus rerum hic rem voluptatem </p>
      </div>
      <div className='Home-btn-container'>
          <button className='Home-btn'>EXPLORE</button>
      </div>
  </div>)
}

export default Home;
