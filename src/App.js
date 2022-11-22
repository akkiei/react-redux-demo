import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";




function App() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  const dispatch = useDispatch()

  const incrementCounter = () =>{

    dispatch({
      type : "INCREMENT"
    })
  }

  const decrementCounter = () =>{
    dispatch({
      type : "DECREMENT"
    })

  }

  const addby10 = () =>{
    dispatch({
      type : "ADDBY10",
      payload : 10
    })

  }

  return (
    <div className="App">
      <h1>Redix Store demo</h1>
      <p>Counter : {counter}</p>
      <button onClick={incrementCounter}>+</button>
      <button onClick={decrementCounter}>-</button>
      <button onClick={addby10}>Add 10</button>

    </div>
  );
}

export default App;
