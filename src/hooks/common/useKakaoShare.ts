import React, { useEffect } from "react";
import { useRouter } from "next/router";

const useKakaoShare = () => {
  const router = useRouter();

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, []);

  const shareKakao = () => {
    const kakao = window.Kakao;
    const queryString = router.asPath.split("?");

    kakao.Share.sendCustom({
      templateId: 95526,
      templateArgs: {
        title: "제목 영역입니다. 이거야",
        description: "설명 영역입니다. 아앙 기모띠? 이거죠? 뚜따뚜다?",
        query: `?${queryString[1]}`,
      },
    });
  };

  return { shareKakao };
};

export default useKakaoShare;
