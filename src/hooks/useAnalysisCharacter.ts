import { Character, SumByTagsData } from "@/type/result.type";
import CHARACTER from "@/data/typeCharacter.json";
import { useEffect, useState } from "react";

type Titles = keyof typeof CHARACTER.data;

const useAnalysisCharacter = (array: SumByTagsData[]) => {
  const [character, setCharacter] = useState<Character>();
  const sortedValue = [...array].sort((a, b) => b.value - a.value).slice(0, 2);
  const joinedTitle = sortedValue.map((tag) => tag.title).join("") as Titles;

  useEffect(() => {
    setCharacter(CHARACTER.data[joinedTitle]);
  }, [array]);

  return { character };
};

export default useAnalysisCharacter;
