import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Header from "./Components/header";
import { counterActions } from "./store";

function App() {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const Inc = () => {
    dispatch(counterActions.increment());
  };

  const Dec = () => {
    dispatch(counterActions.decrement());
  };

  const Addbyn = () => {
    dispatch(counterActions.addbyn(12));
  };
  return (
    <div className="App">
      <h1>The counter in App is : {counter}</h1>
      <button onClick={Inc}>+</button>
      <button onClick={Dec}>-</button>
      <button onClick={Addbyn}>Add by n</button>

      {/* <Header /> */}
    </div>
  );
}

export default App;
