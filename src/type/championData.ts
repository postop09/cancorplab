export type Champion = {
  blurb: string;
  id: string;
  image: ChampionImage;
  info: any;
  key: string;
  name: string;
  partype: string;
  stats: any;
  tags: string[];
  title: string;
  version: string;
};

export type CustomChampion = {
  id: string;
  image: ChampionImage;
  key: string;
  name: string;
  tags: string[];
};

type ChampionImage = {
  full: string;
  group: string;
  h: number;
  sprite: string;
  w: number;
  x: number;
  y: number;
};
