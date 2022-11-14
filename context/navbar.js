import { createContext, useContext, useState } from "react";

const Context = createContext();

export function NavProvider({ children }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <Context.Provider value={[isNavExpanded, setIsNavExpanded]}>
      {children}
    </Context.Provider>
  );
}

export function useNavContext() {
  return useContext(Context);
}
