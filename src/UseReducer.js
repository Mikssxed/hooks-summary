import { useReducer } from "react";

// useReducer - lepsze useState, kiedy jest bardziej skomplikowane

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

const Component = () => {
  const [state, dispatch] = useReducer(learnReducer, []);
  const filter = (filtered) => {
    dispatch({
      type: "SET",
      ing: filtered,
    });
  };

  return <div></div>;
};
