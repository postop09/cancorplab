interface ChampionPoints {
  championPoints: number;
}

const sumMasteryPoint = <T extends ChampionPoints>(data: T[]): number => {
  const pointList = data.map((mastery) => mastery.championPoints);

  return pointList.reduce((sum, point) => sum + point, 0);
};

export default sumMasteryPoint;
