const useFilterObject = <T, L>(list: L[] | {}, necessaryKeys: string[]): T[] => {
  let result: T[] = [];

  Object.entries(list).forEach(([_, value]: [string, any]) => {
    const customData = necessaryKeys.reduce((result: any, key: string) => {
      result[key] = value[key];
      return result;
    }, {});
    result.push(customData);
  });

  return result;
};

export default useFilterObject;
