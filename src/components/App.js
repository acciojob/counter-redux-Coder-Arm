
import React from "react";
import './../styles/App.css';
import { useDispatch,useSelector } from "react-redux";
import {incFn,decFn} from '../redux/counterSlice'
const App = () => {
  const counter = useSelector(state => state.counter);
  const dispatch  = useDispatch();
  return (
    <div>
       <button onClick={() => dispatch(incFn())}>Increment</button>
       <div>{counter}</div>
       <button onClick={() => dispatch(decFn())}>Decrement</button>
    </div>
  )
}

export default App
