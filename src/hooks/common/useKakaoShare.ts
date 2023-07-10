import { useEffect } from "react";

const useKakaoShare = () => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, []);

  const shareKakao = (title: string, description: string) => {
    const kakao = window.Kakao;

    kakao.Share.sendCustom({
      templateId: 95526,
      templateArgs: {
        title,
        description,
        query: `?summonerName=${window.sessionStorage.getItem("summonerName")}`,
      },
    });
  };

  return { shareKakao };
};

export default useKakaoShare;
