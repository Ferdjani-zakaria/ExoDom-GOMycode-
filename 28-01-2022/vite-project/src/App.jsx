import { useState } from 'react'
import NavBar from './Components/navBar/NavBar.jsx'
import Home from './Components/Pages/Home/Home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App
