import React from "react";
import { Outlet } from "react-router-dom";
import {CenteredLogoNavbar} from "../components/MainNavbar"
import MainFooter from "../components/MainFooter";
import StickyContact from "../components/StickyContactButton";
import ChatWidget from "../components/ChatWidget";


const PublicLayout = () => {
  return (
    <div>
      <CenteredLogoNavbar/>
      <main className="min-h-screen">
        {/* <ChatWidget /> */}
        <StickyContact />
        <Outlet />
      </main>
      <MainFooter />
    </div>
  );
};

export default PublicLayout;
