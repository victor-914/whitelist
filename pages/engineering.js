import React from "react";
import EnginneringComponent from "../components/enginnering/Enginnering";
import Footer from "../components/footer/Footer";
import NavBar from "/components/navBar/NavBar";

function enginnering() {
  return (
    <>
       <NavBar />
      <EnginneringComponent />
      <Footer/>
    </>
  );
}

export default enginnering;
