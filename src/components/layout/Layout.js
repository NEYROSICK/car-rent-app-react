import { Suspense } from "react";
import Header from "../common/header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
