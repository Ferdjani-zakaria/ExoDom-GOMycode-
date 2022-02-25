import { useState } from 'react'
import { Provider } from 'react-redux';
import { store } from "./redux/store";
import ToDoContainer from './component/todoApp';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Provider store={store}>
        <ToDoContainer />
      </Provider>
      
    </div>
  )
}

export default App
