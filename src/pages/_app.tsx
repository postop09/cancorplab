import type { AppProps } from "next/app";
import Layout from "@/components/layout/Layout";
import GlobalStyle from "@/styles/style";
import { CharacterProvider } from "@/context/CharacterContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <CharacterProvider>
          <Component {...pageProps} />
        </CharacterProvider>
      </Layout>
    </>
  );
}
