import { useState } from 'react'
import Row from './components/row/Row.jsx'
import AllTheRows from './components/AllTheRows/AllTheRows.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-red-900">
      <>
        <NavBar/>
        <AllTheRows/>
      </>
     
    </div>
  )
}

export default App
