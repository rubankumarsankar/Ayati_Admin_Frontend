import React from "react";
import { Outlet } from "react-router-dom";
import {CenteredLogoNavbar} from "../components/MainNavbar"
import MainFooter from "../components/MainFooter";


const PublicLayout = () => {
  return (
    <div>
      <CenteredLogoNavbar/>
      <main className="min-h-screen">
        <Outlet />
      </main>
      <MainFooter />
    </div>
  );
};

export default PublicLayout;
