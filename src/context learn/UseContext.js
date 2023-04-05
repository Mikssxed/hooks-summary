import { useContext } from "react";
import { SmthContext } from "./smth-context";

const Component = () => {
  const smthContext = useContext(SmthContext)

 // smthContext.isAuth --- example
  return (
      <div></div>
  );
};

//.Consumer daje data