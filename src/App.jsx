import { useEffect, useReducer } from "react";
import Layout from "./components/Layout";
import { StateContext } from "./context/Context";
import { InitialState, basketReducer } from "./reducer/basketReducer";

function App() {
  const [basketState, basketDispatch] = useReducer(basketReducer, InitialState)
  useEffect(() => {
    localStorage.setItem('basket', JSON.stringify(basketState.basket))
  }, [basketState.basket])
  return (
    <StateContext.Provider value={{ basketState, basketDispatch }} >
      <Layout />
    </StateContext.Provider>
  )
}

export default App;