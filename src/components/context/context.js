import { createContext, useState } from "react";

const Context = createContext();
const Provider = ({ children }) => {
    const [dark, setDark] = useState(false);
    const [isUserExist, setIsUserExist] = useState(false);
  return (
  <Context.Provider value={{dark, isUserExist, setDark, setIsUserExist}}>
    {children}
  </Context.Provider>
  );
};
export default Provider;