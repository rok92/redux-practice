import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Box from "./components/Box";

function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  let id = useSelector((state) => state.id);
  let password = useSelector((state) => state.password);
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } });
  };
  const decrease = () => {
    dispatch({ type: "DECREMENT", payload: { num: 3 } });
  };
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "rok", password: "123" } });
  };
  return (
    <div>
      <h3>
        {id}, {password}
      </h3>
      <div className="num">{count}</div>
      <button onClick={increase}>Count up</button>
      <button onClick={decrease}>Count down</button>
      <button onClick={login}>log in</button>
      <Box />
    </div>
  );
}

export default App;
