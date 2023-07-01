import React, { createContext, useState } from "react";
import { Character } from "@/type/result.type";

interface contextProps {
  children: React.ReactNode | React.ReactNode[];
}

type Store = {
  character: Character | undefined;
  setCharacter: React.Dispatch<React.SetStateAction<Character | undefined>>;
};

const CharacterContext = createContext<Store>({
  character: undefined,
  setCharacter: () => {},
});
const CharacterProvider = ({ children }: contextProps) => {
  const [character, setCharacter] = useState<Character>();

  const store = {
    character,
    setCharacter,
  };

  return <CharacterContext.Provider value={store}>{children}</CharacterContext.Provider>;
};

export { CharacterProvider, CharacterContext };
