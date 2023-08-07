import React, { createContext, useMemo, useState } from "react";
import { Character } from "@/type/result.type";

interface ContextProps {
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

const CharacterProvider = ({ children }: ContextProps) => {
  const [character, setCharacter] = useState<Character>();

  const store = useMemo(
    () => ({
      character,
      setCharacter,
    }),
    [],
  );

  return (
    <CharacterContext.Provider value={store}>
      {children}
    </CharacterContext.Provider>
  );
};

export { CharacterProvider, CharacterContext };
