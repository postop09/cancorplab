const useGetPercentage = (numerator: number, denominator: number) => {
  return +((numerator / denominator) * 100).toFixed(1);
};

export default useGetPercentage;
