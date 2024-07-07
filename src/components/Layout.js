// components/Layout.js
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Footer from "./HomeStuff/Footer";
import Navbar from "./HomeStuff/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* <header>{<Header />}</header> */}
      <Navbar />
      <main className="flex-1 p-4">{children}</main>
      <footer className="relative">{<Footer />}</footer>
      <ToastContainer />
    </div>
  );
};

export default Layout;
