import customAxios from "@/lib/customAxios";

const useGetMastery = () => {
  const getMastery = async (id: string) => {
    const res = await customAxios(
      "get",
      `/champion-mastery/v4/champion-masteries/by-summoner/${id}`,
    );

    return res && res.data;
  };

  return { getMastery };
};

export default useGetMastery;
