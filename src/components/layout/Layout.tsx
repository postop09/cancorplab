import React from "react";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "styled-components";
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
      {isNotOriginPath(<Header />)}
      <main style={isNotOriginPath({ paddingTop: "75px" })}>{children}</main>
      {isNotOriginPath(<Footer />)}
    </ThemeProvider>
  );
};

export default Layout;
