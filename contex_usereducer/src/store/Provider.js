import { useReducer } from "react";
import TodoContext from "./Context";
import reducer, { initState } from "./reducer";
import logger from "./logger";

function Provider({ children }) {
  const [state, dispatch] = useReducer(logger(reducer), initState);
  return (
    <TodoContext.Provider value={[state, dispatch]}>{children}</TodoContext.Provider>
  );
}

export default Provider;
