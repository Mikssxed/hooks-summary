import { useReducer } from "react";

const learnReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return action.ing;
    case "ADD":
      return [...state, action.item];
    case "DELETE":
      return state.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("should not appear");
  }
};

const useHook = () => {
  const [state, dispatch] = useReducer(learnReducer, []);

  const someFunction = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  return [state]; //zwracamy cokolwiek
};

export default useHook;

//zeby to uzyc
const Component2 = () => {
  const [state] = useHook();
};
