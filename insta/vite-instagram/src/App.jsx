import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LogPage from './pages/LogPage'
import CreateAccountPage from './pages/createAccountPage'
function App() {

  return (
    <div className="App"> 

      <CreateAccountPage />
      {/* <Router>
        <div>
          <LogPage />
          <Route path='/CreateAccountPage' element ={<CreateAccountPage/>}/>
        </div>
        
      </Router> */}
      
    </div>
  )
}

export default App
