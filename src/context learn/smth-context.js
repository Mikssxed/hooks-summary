const { createContext } = require("react");

export const SmthContext = createContext({
  isAuth: false,
  login: () => {},
});

const SmthContextProvider = (props) => {
  return (
    <SmthContext.Provider value={{}}>{props.children}</SmthContext.Provider>
  );
};

export default SmthContextProvider;
//wrapujemy SmthContextProvider inny component, np w index.js i wtedy wszystko
//bedzie mialo dostep do tego
