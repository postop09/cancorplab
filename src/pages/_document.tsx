import { Head, Html, Main, NextScript } from "next/document";

declare global {
  interface Window {
    Kakao: any;
  }
}

export default function Document() {
  return (
    <Html lang="ko">
      <Head>
        <meta
          name="description"
          content="롤챔은 리그오브레전드 플레이 정보와 관련된 통계 그래프, 재미로 보는 성향분석 LBTI 까지. lol과 관련된 재미있는 정보를 얻을 수 있는 공간입니다."
        />
        <meta property="og:image" content="/assets/img/seo/ogImage.png" />
        <meta
          name="google-site-verification"
          content="L9BHul-5pj7dMiaxrsiTC3MBUQlM6S60amwKpr8iXMk"
        />
        <link rel="icon" href="/assets/favicon/favicon-32x32.png" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6130554803659144"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.2.0/kakao.min.js"
          integrity="sha384-x+WG2i7pOR+oWb6O5GV5f1KN2Ko6N7PTGPS7UlasYWNxZMKQA63Cj/B2lbUmUfuC"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
