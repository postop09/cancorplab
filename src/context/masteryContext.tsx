import React, { createContext, useState } from "react";
import { MasteryFullData } from "@/type/masteryData";

interface contextProps {
  children: React.ReactNode | React.ReactNode[];
}

type Store = {
  masteryList: MasteryFullData[];
  setMasteryList: React.Dispatch<React.SetStateAction<MasteryFullData[]>>;
};

const MasteryContext = createContext<Store>({
  masteryList: [],
  setMasteryList: () => [],
});
const MasteryProvider = ({ children }: contextProps) => {
  const [masteryList, setMasteryList] = useState<MasteryFullData[]>([]);

  const store = {
    masteryList,
    setMasteryList,
  };

  return <MasteryContext.Provider value={store}>{children}</MasteryContext.Provider>;
};

export { MasteryProvider, MasteryContext };
