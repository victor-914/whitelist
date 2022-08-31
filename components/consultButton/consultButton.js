import React from "react";
import StyledConsultButton from "./consultButton.styles";
import { BsChevronDoubleRight } from "react-icons/bs";
import Link from "next/link";
function ConsultButton() {
  return (
    <StyledConsultButton>
      <Link href="/contact">
        <a className="req">
          <div>Request Consultation</div>

          {""}<BsChevronDoubleRight />
        </a>
      </Link>
    </StyledConsultButton>
  );
}

export default ConsultButton;
