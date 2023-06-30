import React, { useEffect } from "react";

const useKakaoShare = () => {
  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, []);

  const shareKakao = () => {
    const kakao = window.Kakao;
    kakao.Share.sendCustom({
      templateId: 95526,
      templateArgs: {
        title: "제목 영역입니다. 이거야",
        description: "설명 영역입니다. 아앙 기모띠? 이거죠? 뚜따뚜다?",
        // path: "lbti?summoner=t7v86D5PiqZEwW3uf0mM-QstrdN6PS_tJ9wvvkGwkxkODQ&summonerName=hide+on+bush",
      },
    });
  };

  return { shareKakao };
};

export default useKakaoShare;
