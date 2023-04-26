import React, { createContext, useState } from "react";

interface contextProps {
  children: React.ReactNode | React.ReactNode[];
}

type Store = {
  masteryList: never[];
  setMasteryList: React.Dispatch<React.SetStateAction<never[]>>;
};

const MasteryContext = createContext<Store>({
  masteryList: [],
  setMasteryList: () => {},
});
const MasteryProvider = ({ children }: contextProps) => {
  const [masteryList, setMasteryList] = useState([]);

  const store = {
    masteryList,
    setMasteryList,
  };

  return <MasteryContext.Provider value={store}>{children}</MasteryContext.Provider>;
};

export { MasteryProvider, MasteryContext };
