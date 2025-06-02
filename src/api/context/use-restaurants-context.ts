import { useContext } from "react";
import { RestaurantsContext } from "./restaurants-context-function";

const useRestaurantsContext = () => {
  const context = useContext(RestaurantsContext);
  if (!context) {
    throw new Error(
      "useRestaurantsContext deve ser usado dentro de um RestaurantsProvider"
    );
  }
  return context;
};

export default useRestaurantsContext;
