import React from "react";
import Header from "@/components/layout/Header";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import { useRouter } from "next/router";
import Footer from "@/components/layout/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const headerPaddingStyle = () => {
    if (router.pathname !== "/") {
      return { paddingTop: "75px" };
    }
    return;
  };

  return (
    <ThemeProvider theme={theme}>
      {router.pathname !== "/" && <Header />}
      <main style={headerPaddingStyle()}>{children}</main>
      {router.pathname !== "/" && <Footer />}
    </ThemeProvider>
  );
};

export default Layout;
