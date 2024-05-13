import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";
import React from "react";
import "../../Components/Shared/Navbar/Navbar.css";
import StoreProvider from "./StoreProvider";

const WithRootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <StoreProvider>
      {/* <Provider store={store}> */}
      <div className="min-h-screen">
        <Navbar></Navbar>
        {children}
      </div>
      <Footer />
      {/* </Provider> */}
    </StoreProvider>
  );
};

export default WithRootLayout;
