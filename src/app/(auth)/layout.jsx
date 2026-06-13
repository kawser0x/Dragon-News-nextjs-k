import Navbar from "@/components/shared/Navbar";
import React from "react";
import { montserrat } from "../layout";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserrat.className}`}>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthLayout;
