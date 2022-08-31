import React from "react";
import StyledEachService from "./Eachservices.styles";
import Image from "next/image";
function Eachservices({ svg, title }) {
  return (
    <StyledEachService>
       
        <div className="title">{title}</div>
        </StyledEachService>
  );
}
export default Eachservices;
