const getPercentage = (numerator: number, denominator: number) => {
  return +((numerator / denominator) * 100).toFixed(1);
};

export default getPercentage;
