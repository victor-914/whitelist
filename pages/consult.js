import React from "react";
import Consult from "../components/consult/Consult.js";
import Footer from "../components/footer/Footer.js";
import NavBar from "/components/navBar/NavBar";
function ConsultPage() {
  return (
    <div>
      <NavBar />
      <Consult />
      <Footer/>
    </div>
  );
}

export default ConsultPage;
