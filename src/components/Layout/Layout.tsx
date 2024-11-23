import React from "react";
import loadable from "../Loadable/Loadable";

const Footer = loadable(async () => await import("../Footer/Footer"));
const Navbar = loadable(async () => await import("../Navbar/Navbar"));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
