import Head from "next/head";

import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { useState } from "react";

const Layout = ({ title, description, children }) => {
  const [mobileMainNav, setMobileMainNav] = useState(true);

  return (
    <>
      {/* <ToastContainer /> */}
      <div className="font-sans background min-h-[100vh]">
        <Head>
          <title>{title ? `Hasibul Hasan | ${title}` : "Hasibul Hasan "}</title>
          {description && <meta name="description" content={description} />}
          <link ref="icon" href="/favicon.png" />
        </Head>

        <Navbar />

        <>{children}</>

        <div className="w-full">
          {/* <hr className="hr-line"></hr> */}
          <div className="  bottom-0 border-gray-100 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
