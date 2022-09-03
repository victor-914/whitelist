import Link from "next/link";
import React from "react";
import StyledGeneral from "./general.styles";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import general_contracts from "/assets/general_contracts.webp";
import { FiHome } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import ConsultButton from "../consultButton/consultButton";
import Talktous from "../TalkToUs.js/Talktous";

function EnginneringComponent() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-0px ",
  });

  const { ref: MECH_container, inView: MECH_inView } = useInView({
    triggerOnce: true,
    rootMargin: "-70px ",
  });

  return (
    <StyledGeneral>
      <div className="sub_Nav">
        <Link href="/">
          <a>
            <FiHome />{" "}
          </a>
        </Link>
        <div></div>
        <div className="arrow">
          <FiChevronRight />
        </div>
        <div>General</div>
      </div>

      <div
        className={`hero_service  ${inView ? "animate_from_right" : ""}`}
        ref={ref}
      >
        <div className="img_holder">
          <div className="cover"></div>
          <Image
            src={general_contracts}
            layout="fill"
            className="service_img"
            priority="true"
            alt="generalContract_img"
          />
        </div>
        <div
          className={`hero_text  ${inView ? "animate_from_leftconsult" : ""}`}
          // className="hero_text"
        >
          <header>
            GENERAL CONTRACTS & <span> SUPPLIES</span>
          </header>
          <div className="text">
            At <span className="highlight">Whitelist technologies</span>, we
            pride ourselves in our ability to
            <span className="highlight"> consistently</span> deliver
            exceptional, on-time end results while maintaining genuinely
            personal customer service, unparalleled client communication, and{" "}
            <span className="highlight"> competitive prices</span>.
          </div>
          <ConsultButton />
        </div>
      </div>

      <section className="each_service">
        <div className="per_serviceContainer">
          <div className="header_text">General Contracts & Supplies</div>
          <div
            ref={MECH_container}
            className={`container ${MECH_inView ? "software_CONSULTING" : ""}`}
          >
            Whitelist Company Ltd has built an excellent reputation of
            integrity, credibility and professionalism among all its clients.
            This has been achieved through the supplies of unrivalled quality
            products.we carefully choose to partner with topnotch original
            equipment manufacturers (OEMs) whose products are innovatively
            engineered for durability and superior performance and at unbeatable
            prices. <br />
            We supplies technological goods and general merchandise such as
            Desktop computers, Printers, Office A4 papers, Office furnitures and
            so many more.
          </div>
        </div>
      </section>

      <Talktous />
    </StyledGeneral>
  );
}

export default EnginneringComponent;
