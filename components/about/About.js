import React from "react";
import StyledAbout from "./About.styles";
import Image from "next/image";
import smile from "/assets/smile.png";
import shake_hand from "/assets/shake_hand.webp";
import Talktous from "../TalkToUs.js/Talktous";
import NavBar from "../navBar/NavBar";

export const width = "100%";
export const height = "100%";

function About() {
  return (
    <>
      <NavBar />
      <StyledAbout>
        <div className="decorator_container">
          <div className="decorator_one"></div>
          <div className="decorator_two"></div>
          <div className="decorator_three"></div>
        </div>

        <div className="header">
          Company
          <div className="liner"></div>
        </div>
        <div className="our_vision padding">
          <header>Our Vision</header>
          <div className="our_vision_text text ">
            To be the leading engineering and IT services company that provides
            smart, cost effective and ever improving solutions (services) to
            related challenges around the world.
          </div>
        </div>
        <div className="about_us padding">
          <header id="about_us_header">About Us</header>
          <div className="text about_text">
            Established and incorporated on <span>December 1, 1988</span>,
            WhiteList Technology Company Limited, located at No 10 Aimure
            Avenue, GRA, Benin City, Edo State first started out as a general
            supplies outfit and grew to provide electrical and civil engineering
            services to the present day where it has established itself as a big
            player in the ICT/telecoms and consultancy services industry serving
            private individuals, corporate organizations as well as government
            ministries, departments and agencies (MDAs). <br />
            <br />
            Over the years, WhiteList Technology Ltd has built an impeccable
            reputation of <span>integrity,</span> <span>credibility</span> and{" "}
            <span>professionalism</span> among all its clients. This has been
            achieved through the provision of unrivalled quality products and
            services in a very professional manner.
            <br />
            <br /> Consequently, we carefully choose to partner with{" "}
            <span>top notch original equipment manufacturers</span>
            (OEMs) whose products are innovatively engineered for{" "}
            <span>durability</span> and <span>superior performance</span> and at{" "}
            <span>unbeatable prices.</span>
            <br />
            <br /> In every area of our service offering, we have{" "}
            <span>qualified personnel</span> that are adequately trained,
            experienced and well equipped to carter for the specific needs of
            our clients. At WhiteList Technology Ltd, we recognize the
            importance of our personnel in providing a{" "}
            <span>customer service that goes above and </span>
            beyond the norm. We believe that the key to providing a first-class
            service lies with investing in the workforce which is why we have
            made significant contributions towards recruitment, training and
            development in terms of our Managers, Engineers, Consultants, IT
            experts and Front-Line technicians.
            <br />
            <br />
            By making a continuous effort towards the personal and professional
            development of our workforce, we have achieved a greater level of
            staff motivation and customer satisfaction. As one of the industry’s
            leading engineering and IT services companies, WhiteList Technology
            Ltd’s emphasis on <span>quality</span> combined with an{" "}
            <span>innovative </span>and <span>customer focused approach</span>{" "}
            to the provision of engineering, IT and consultancy services
            differentiates it from other organizations operating in the sector.
            <br /> <br />
            WhiteList Technology Ltd ultimately provides{" "}
            <span>peace of mind,</span> enabling its {""}
            <span>clients</span> to focus on achieving their{" "}
            <span>business objectives,</span> rather than dealing with the{" "}
            <span>worries</span> and concerns associated with their technology
            and <span>business needs</span>.
          </div>
        </div>

        <div className="our_coreValue padding">
          <header className="core">Our Core Value</header>
          <div className="flex">
            <div className="image_holder">
              <Image
                src={shake_hand}
                layout="responsive"
                className="shake_img"
                max-width={width}
                max-height={height}
                position="absolute"
              />
            </div>
            <div className="text" id="our_coreValue_text">
              • Client satisfaction is our priority <br />
              • Safety is never compromised. <br />
              • Compliance with government and industry regulations <br />
              • Provide and retain high quality with on schedule services.
              <br />
              • We take our clients/customers as partners. <br />
              • To provide a safe workplace and preserve the environment. <br />
              • To generate reasonable returns on the assets entrusted to us by
              our shareholders. <br />
              • To always show concern for the well-being of our employees and
              co-workers. <br />
              • To promote teamwork. <br />• Strive for efficiency in all that
              we do
            </div>
          </div>
        </div>
        <div className="our_missionStatement  padding">
          <header id="mission_header">Our Mission Statement</header>

          <div className="flex">
            <div className="text" id="our_missionStatement_text">
              WhiteList Technology Company Ltd aims to provide innovative,
              efficient and cost-effective solutions that exceed our clients’
              expectations. We promote training and development and emphasize
              the value of active customer service as a vital tool to both gain
              competitive advantage and exceed client expectations. To achieve
              this mission, we must embrace the following values and work ethics
              within our organization.<br></br>• Strive for quality and
              excellence in everything that we do <br />• Foster a{" "}
              <span>“we can do”</span> culture by working with commitment and
              enthusiasm <br />
              • Have a clear view of the high standards expected of us and
              strive to maintain them <br />
              • Take personal and team ownership for our work
              <br />
            </div>
            <div id="image_holder">
              <Image src={smile} layout="fixed" className="hero_im"
               position="absolute"
              />
            </div>
          </div>
        </div>
        <Talktous />
      </StyledAbout>
    </>
  );
}

export default About;
