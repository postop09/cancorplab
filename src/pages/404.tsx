import React from "react";
import Head from "next/head";

const Error404 = () => {
  return (
    <>
      <Head>
        <title>404 에러 | CANLab</title>
      </Head>
      <section>
        <h2>
          페이지를 찾을 수 없습니다. 잠시 후 다시 시도해주세요.
        </h2>
      </section>
    </>
  );
};

export default Error404;