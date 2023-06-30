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
          name="google-site-verification"
          content="L9BHul-5pj7dMiaxrsiTC3MBUQlM6S60amwKpr8iXMk"
        />
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
