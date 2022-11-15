import { createContext, useContext, useState } from "react";

const Context = createContext();

export function NavProvider({ children }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isActive, setActive] = useState("");
  return (
    <Context.Provider
      value={[isNavExpanded, setIsNavExpanded, isActive, setActive]}
    >
      {children}
    </Context.Provider>
  );
}

export function useNavContext() {
  return useContext(Context);
}
