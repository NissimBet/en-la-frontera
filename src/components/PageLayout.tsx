import React from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
