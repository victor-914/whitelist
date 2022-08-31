import React from "react";
import StyledConsult from "./Consult.styles";
import Image from "next/image";
import service from "/assets/services.webp";
import { FiHome } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import ConsultButton from "../consultButton/consultButton";
import Eachservices from "../services/Eachservices";
import CONSULTARRAY, {
  INFRASTRUCTUREARRAY,
  ITSECURITYARRAY,
  SOFTWAREARRAY,
} from "../../utils/consultArray";
import Talktous from "../TalkToUs.js/Talktous";

function Consult() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-0px ",
  });

  const { ref: software_container, inView: software_inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px ",
  });

  const { ref: INFRASTRUCTURE_container, inView: INFRASTRUCTURE_inView } =
    useInView({
      triggerOnce: true,
      rootMargin: "-50px ",
    });

  const { ref: CONSULTING_container, inView: CONSULTING_inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px ",
  });

  const { ref: ITSECURITY_container, inView: ITSECURITY_inView } = useInView({
    triggerOnce: true,
    rootMargin: "-50px ",
  });

  return (
    <>
      <StyledConsult>
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
          <div>IT consult</div>
        </div>
        <div
          className={`hero_service  ${inView ? "animate_from_right" : ""}`}
          ref={ref}
        >
          <div className="img_holder">
            <div className="cover"></div>
            <Image src={service} layout="fill" className="service_img" />
          </div>
          <div
            className={`hero_text  ${inView ? "animate_from_leftconsult" : ""}`}
          >
            <header>
              Information <span>Technology</span> Consulting
            </header>
            <div className="text">
              Information Technology (IT) Consulting services help improve the{" "}
              <span className="highlight">performance</span>,{" "}
              <span className="highlight">scalability</span> and{" "}
              <span className="highlight">competitiveness</span> of your company
              through right technology enablement and usage. <br />
              <span className="highlight">Whitelist Technologies </span>
              can expertly guide your IT and digital transformation {""}
              <span className="highlight">initiatives </span>
              from
              <span className="highlight"> strategy </span>
              to
              <span className="highlight"> implementation </span>.
            </div>

            <ConsultButton />
          </div>
        </div>
        <section className="each_service">
          <div className="per_serviceContainer">
            <div className="header_text">IT consulting Services</div>
            <div
              className={`container ${
                CONSULTING_inView ? "software_CONSULTING" : ""
              }`}
              ref={CONSULTING_container}
            >
              {CONSULTARRAY.map((items) => (
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
            <div className="header_text">Software Services</div>
            <div
              className={`container  software ${
                software_inView ? "software_CONSULTING" : ""
              }`}
              ref={software_container}
              id="soft"
            >
              {SOFTWAREARRAY.map((items) => (
                <Eachservices
                  key={items._id}
                  svg={items.icon}
                  title={items.header}
                />
              ))}
            </div>
          </div>
          <div className="per_serviceContainer">
            <div className="header_text">IT Infrastructure Services</div>
            <div
              className={`container  software ${
                INFRASTRUCTURE_inView ? "software_CONSULTING" : ""
              }`}
              id="container_single"
              ref={INFRASTRUCTURE_container}
            >
              {INFRASTRUCTUREARRAY.map((items) => (
                <Eachservices
                  key={items._id}
                  svg={items.icon}
                  title={items.header}
                />
              ))}
            </div>
          </div>
          <div className="per_serviceContainer">
            <div className="header_text">Internet Security Services</div>
            <div
              className={`container  software ${
                ITSECURITY_inView ? "software_CONSULTING" : ""
              }`}
              id="container_single"
              ref={ITSECURITY_container}
            >
              {ITSECURITYARRAY.map((items) => (
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
      </StyledConsult>
    </>
  );
}

export default Consult;
