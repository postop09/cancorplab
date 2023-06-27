import React from "react";
import Header from "@/components/layout/Header";
import styled, { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { useRouter } from "next/router";
import Footer from "@/components/layout/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const isNotOriginPath = (returnValue: any) => {
    if (router.pathname !== "/") {
      return returnValue;
    }
    return;
  };

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        {isNotOriginPath(<Header />)}
        <main style={isNotOriginPath({ paddingTop: "75px", paddingBottom: "200px" })}>
          {children}
        </main>
        {isNotOriginPath(<Footer />)}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Layout;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`;
