import React from "react";
import StyledIct from "./ICT.styles";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import digitalworld from "/assets/digitalworld.webp";
import { FiHome } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Talktous from "../TalkToUs.js/Talktous";
import Eachservices from "../services/Eachservices";
import ConsultButton from "../consultButton/consultButton";
import INTERNETARRAY, { NETWORKARRAY } from "../../utils/IctArray";
function IctComponents() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-0px ",
  });

  const { ref:NETWORK_container, inView: NETWORK_inView } = useInView({
    triggerOnce: true,
    rootMargin: "-70px ",
  });

  const { ref:INTERNET_container, inView: INTERNET_inView } = useInView({
    triggerOnce: true,
    rootMargin: "-70px ",
  });


  return (
    <StyledIct>
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
        <div>Communication</div>
      </div>

      <div
        className={`hero_service  ${inView ? "animate_from_right" : ""}`}
        ref={ref}
      >
        <div className="img_holder">
          <div className="cover"></div>
          <Image src={digitalworld} layout="fill" className="service_img" />
        </div>
        <div
          className={`hero_text  ${inView ? "animate_from_leftconsult" : ""}`}
        >
          <header>
            Information <span>Communication</span> Technology
          </header>
          <div className="text">
            We provide an end-to-end implementation of ICT services enriched
            with innovative, practical solutions, and
            <span className="highlight"> actionable strategies </span>.
            <span className="highlight"> Leveraging </span> the potential of ICT
            to <span className="highlight"> empower </span> businesses and
            organisations
            <span className="highlight"> . </span>
          </div>

          <ConsultButton />
        </div>
      </div>

      <section className="each_service">
        <div className="per_serviceContainer">
          <div className="header_text">
            Internet {" & "} Connectivity Services
          </div>
          <div 
          ref={INTERNET_container}
          className={`container ${
            INTERNET_inView ? "software_CONSULTING" : ""
          }`}
          id="container_single"
          >
            {INTERNETARRAY.map((items) => (
              <Eachservices
                key={items._id}
                svg={items.icon}
                title={items.header}
              />
            ))}
          </div>
        </div>

        {/* ------------------------------------- */}

        <div className="per_serviceContainer">
          <div className="header_text">Network Infrastructure Services</div>
          <div 
            ref={NETWORK_container}
            className={`container ${
              NETWORK_inView ? "software_CONSULTING" : ""
            }`}
          >
            {NETWORKARRAY.map((items) => (
              <Eachservices
                key={items._id}
                svg={items.icon}
                title={items.header}
              />
            ))}
          </div>
        </div>
      </section>

      <Talktous />
    </StyledIct>
  );
}

export default IctComponents;
