import { useRef } from "react";

//ref - wartość niezmienna, jest definiowany poza closure, więc wartość
// się nie zmieni

const Component = () => {
  const inputRef = useRef();

  return <div ref={inputRef.current.value}></div>;
};
