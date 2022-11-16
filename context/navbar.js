import { createContext, useContext, useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

const Context = createContext();

export function NavProvider({ children }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isActive, setActive] = useState("");

  const { ref } = useSwipeable({
    onSwipedLeft: () => setIsNavExpanded(false),
    onSwipedRight: () => setIsNavExpanded(true),
    delta: 50,
  });

  useEffect(() => {
    ref(document);
  });
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
