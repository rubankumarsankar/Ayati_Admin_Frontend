import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbar from "../components/MainNavbar ";
// import PublicFooter from "../components/PublicFooter";

const PublicLayout = () => {
  return (
    <div>
      <MainNavbar />
      <main className="min-h-screen pt-16">
        <Outlet />
      </main>
      {/* <PublicFooter /> */}
    </div>
  );
};

export default PublicLayout;
