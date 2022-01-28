import { useState } from 'react'
import './App.css'
// import UserContainer from './components/userContainer/userContainer.jsx'
// import CounterFct from './components/Counterfct/CounterFct.jsx'
// import MessageBox from './components/messageBox/MessageBox.jsx'
// import BanquePage from './components/banquePage/banquePage.jsx'
import ShoppingPage from './components/shoppingPage/shoppingPage.jsx'
function App() {

  return (
    <div className="App">
      {/* <header><p>Students Go MY Code</p></header> */}
      {/* <CounterFct/>
      <UserContainer/>      */}
      {/* <MessageBox
        name = "Ali"
        handleMessage={()={this.setState({message1:})}}
      />
      <MessageBox
        name = "Mohammed"
        handleMessage={()={this.setState({message1:})}}
      /> */}
      {/* <BanquePage /> */}
      <ShoppingPage/>

    </div>
  )
}

export default App
