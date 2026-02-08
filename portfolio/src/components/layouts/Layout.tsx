import type { ReactNode } from "react";
import Header from "./header/Header";
import Footer from "./Footer/Footer";


const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
        <Header />
            <main>{children}</main>
        <Footer />
    </>
  );
};

export default Layout;
