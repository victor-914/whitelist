import Link from "next/link";
import React from "react";
import StyledEngineering from "./Engineering.styles";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import electrical from "/assets/electrical.webp";
import { FiHome } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import ConsultButton from "../consultButton/consultButton";
import Eachservices from "../services/Eachservices";
import Talktous from "../TalkToUs.js/Talktous";
import ELECTRICALARRAY, {
  CIVILARRAY,
  MECHARRAY,
} from "../../utils/EnginneringArray";

function EnginneringComponent() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-0px ",
  });

  const { ref: ELECTRICAL_container, inView: ELECTRICAL_inView } = useInView({
    triggerOnce: true,
    rootMargin: "-70px ",
  });

  const { ref: CIVIL_container, inView: CIVIL_inView } = useInView({
    triggerOnce: true,
    rootMargin: "-70px ",
  });
  const { ref: MECH_container, inView: MECH_inView } = useInView({
    triggerOnce: true,
    rootMargin: "-70px ",
  });

  return (
    <StyledEngineering>
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
        <div>Engineering </div>
      </div>

      <div
        className={`hero_service  ${inView ? "animate_from_right" : ""}`}
        ref={ref}
      >
        <div className="img_holder">
          <div className="cover"></div>
          <Image src={electrical}  alt="electrical_img" layout="fill" className="service_img"  priority="true"/>
        </div>
        <div
          className={`hero_text  ${inView ? "animate_from_leftconsult" : ""}`}
        >
          <header>
            ENGINEERING <span>SERVICES </span>
          </header>
          <div className="text">
            We provide a full range of engineering services to
            <span className="highlight"> public</span> and{" "}
            <span className="highlight">private</span> sector organisations
            including electrical, mechanical and civil consultancy, design,
            construction, installation, repair, maintenance, training and
            manpower supply. <br />
            <span className="highlight">Whitelist Technologies </span>
            provide
            <span className="highlight"> cost-effective </span>, smart,
            <span className="highlight"> regulation compliant </span>
            engineering solution.
          </div>
          <ConsultButton />
        </div>
      </div>

      <section className="each_service">
        <div className="per_serviceContainer">
          <div className="header_text">Electrical Engineering services</div>
          <div
            ref={ELECTRICAL_container}
            className={`container ${
              ELECTRICAL_inView ? "software_CONSULTING" : ""
            }`}
          >
            {ELECTRICALARRAY.map((items) => (
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
          <div className="header_text">mechanical Engineering services</div>
          <div
            ref={CIVIL_container}
            className={`container ${CIVIL_inView ? "software_CONSULTING" : ""}`}
          >
            {MECHARRAY.map((items) => (
              <Eachservices
                key={items._id}
                svg={items.icon}
                title={items.header}
              />
            ))}
          </div>
        </div>
        <div className="per_serviceContainer">
          <div className="header_text">Civil Engineering service</div>
          <div
            ref={MECH_container}
            className={`container ${MECH_inView ? "software_CONSULTING" : ""}`}
          >
            {CIVILARRAY.map((items) => (
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
    </StyledEngineering>
  );
}

export default EnginneringComponent;
