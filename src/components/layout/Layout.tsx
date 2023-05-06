import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

const Layout = ({ children }: { children: React.ReactNode }) => {
  // TODO - mainPage 에서는 Header hide.
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
