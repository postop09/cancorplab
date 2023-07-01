import React, { useEffect } from "react";
import { useRouter } from "next/router";

const useKakaoShare = () => {
  const router = useRouter();

  useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    }
  }, []);

  const shareKakao = (title: string, description: string) => {
    const kakao = window.Kakao;
    const queryString = router.asPath.split("?");

    kakao.Share.sendCustom({
      templateId: 95526,
      templateArgs: {
        title,
        description,
        query: `?${queryString[1]}`,
      },
    });
  };

  return { shareKakao };
};

export default useKakaoShare;
