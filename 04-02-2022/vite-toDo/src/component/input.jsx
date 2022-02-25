import {useState, useEffect, useContext} from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from "../redux/Slices/todoSlice"

function Input() {

const [input, setInput] = useState({title:''});
    const getValue =(e)=>{
        setTodo({title:e.target.value})
    }
  const dispatch = useDispatch()

    const hundleSubmit =(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))


    }
  return <div>
      <form onSubmit={hundleSubmit} className='flex flex-col bg-stone-500'>
          <input type="text" onChange={getValue} />
          <button>add</button>
      </form>
  </div>;
}

export default Input;
