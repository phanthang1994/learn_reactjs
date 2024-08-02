import { useContext } from "react";
import Context from "./Context";

//đây là nơi dùng Consumer
export const useStore = () => {
  const [state, dispatch] = useContext(Context);//Consumer

  return [state, dispatch];
};
