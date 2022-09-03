import React from "react";
import StyledHero from "./Hero.styles";
import Image from "next/image";
import StyledServiceDemo from "./Service.styles";
import SERVICE_DEMO_ARRAY from "../../utils/ServiceDemoArray";
import { primaryColor, tertiaryColor } from "../../utils/Colors";
import video from "/assets/video.gif";
import videoOp from "/assets/videoOp.webp";
import StyledApproach from "./OurApproach.styles";
primaryColor;
tertiaryColor;
import globe from "/assets/globe.webp";
import StyledAccelerate from "./Accelerate.styles";
import accelerate from "/assets/accelerate.webp";
import different from "/assets/different.webp";
import StyledDifferent from "./Different.styles";
import StyledRequest from "../request/Request.styles";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { BsChevronDoubleRight } from "react-icons/bs";
import StyledContactUs from "./ContactUs.styles";
import wlt from "/assets/wlt.svg";
import emailJs from "emailjs-com";
function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-0px ",
  });

  const { ref: requestRef, inView: requestInView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px ",
  });

  const { ref: accelerateRef, inView: accelerateInView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px ",
  });

  const { ref: approachRef, inView: approachInView } = useInView({
    triggerOnce: true,
    rootMargin: "-150px ",
  });

  const { ref: differentRef, inView: differentInView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px ",
  });

  const { ref: contactRef, inView: contactInView } = useInView({
    triggerOnce: true,
    rootMargin: "-200px ",
  });

   const handleSubmit = (e) => {
       e.preventDefault();
       emailJs.sendForm
   }

  return (
    <>
      <StyledHero>
        <div className="hero_text">
          <div className="asa">
            <Image src={videoOp} alt="heroIcon"  layout="fill"  priority="true" id="heroLogoImg"/>
          </div>

          <Image src={video} id="service_demo_img" layout="fill" alt="heroBanner" />
          <div className="cover"></div>
          <div
            className={`page_title  ${inView ? "animate_from_right" : ""}`}
            ref={ref}
          >
            <div className="hero_text_animation">TRUSTED</div>
            <div id="engine_text">
              ENGINEERING AND
              <span className="it"> IT</span> CONSULTING
            </div>
            <div className="hero_text_animation">COMPANY</div>
          </div>
        </div>
      </StyledHero>
      <StyledRequest>
        <div className="main_text">
          <div
            ref={requestRef}
            className={`main_text_subcontainer ${
              requestInView ? "animate_scale" : ""
            }`}
          >
            We merge imagination and technology to help brands grow in an age of
            <br />
            technological transformation.
          </div>
        </div>
        <div className="container">
          <div>
            <header>Customer-focused approach</header>
            <div className="text_holder">
              By making a continuous effort towards the personal and
              professional development of our workforce, we have achieved a
              greater level of staff motivation and customer satisfaction.
            </div>
          </div>

          <div>
            <header>Highly proficient teams</header>
            <div className="text_holder">
              In every area of our service offering, we have qualified personnel
              that are adequately trained, experienced and well equipped to
              carter for the specific needs of our clients.{" "}
            </div>
          </div>
        </div>
      </StyledRequest>

      <StyledAccelerate>
        <Image src={accelerate} layout="fill" className="img"  alt="accelerate_img"  priority="true"/>
        <div className="accelerate_container">
          <div className="accelerate_subcontainer" ref={accelerateRef}>
            <header
              className={`accelerate_header ${
                accelerateInView ? "animate_accelerate" : ""
              }`}
            >
              Accelerate your technological <br />
              transformation
            </header>
            <div className="subtext">
              Leverage a professional platform that is dedicated to provision of{" "}
              <br />
              quality service, fast delivery, <br /> customer satisfaction at an{" "}
              <br />
              unbeatable price
            </div>
            <div id="consult">
              <Link href="/contact">
                <a>Request consultation</a>
              </Link>
            </div>
          </div>
        </div>
      </StyledAccelerate>
      <StyledApproach>
        <div className="cover"></div>
        <Image src={globe} layout="fill" className="globe" alt="globe_img" priority="true" />
        <div className="approach_text" ref={approachRef}>
          <header className="">
            Our Approach
            <div className="liner"></div>
          </header>
          <div
            className={`approach_textContainer ${
              approachInView ? "animate_approach" : ""
            }`}
          >
            <div className="appro_header">Your Trusted Guide</div>
            <div
              className={`appro_text-holder ${
                approachInView ? "animate_accelerate" : ""
              }`}
            >
              Over the years, We has built an impeccable reputation of
              integrity, credibility and professionalism among all our clients.
              <br /> we recognize the importance of our personnel in providing a
              customer service that goes above and beyond the norm. We believe
              that the key to providing a first-class service lies with
              investing in the workforce which is why we have made significant
              contributions towards recruitment, training and development in
              terms of our Managers, Engineers, Consultants, IT experts and
              Front-Line technicians. <br />
              By making a continuous effort towards the personal and
              professional development of our workforce, we have achieved a
              greater level of staff motivation and customer satisfaction.
            </div>
          </div>
        </div>
      </StyledApproach>

      <StyledServiceDemo>
        <header className="title">
          Our Services
          <div className="liner"></div>
        </header>
        <div className=""></div>
        {SERVICE_DEMO_ARRAY.map((item) => (
          <div className="card" key={item.title}>
            <div className="image_container" key={item.buttonText}>
              <div className="cardtext_container" key={item.link}>
                <header className="card_header" key={item.subtitle}>
                  {item.title}
                </header>
                <div className="card_text" key={item.key1}>
                  {item.subtitle}
                </div>
                <div className="button_container" key={item.key2}>
                  <div className="card_button" key={item.key3}>
                    <Link href={item.link} key={item.key4}>
                      <a key={item.key5}> {item.buttonText}</a>
                    </Link>
                  </div>
                  <div className="button_icon">
                    <BsChevronDoubleRight />
                  </div>
                </div>
              </div>

              <div className="image">
                <div className="overlay"></div>
                <Image src={item.img} id="service_demo_img" layout="fill" />
              </div>
            </div>
          </div>
        ))}
      </StyledServiceDemo>
      <StyledDifferent>
        <div className="cover"></div>
        <Image src={different} className="different_img"  alt="different_img" layout="fill" priority="true" />
        <div className="different_text">
          <header className="header">
            HOW WE’RE DIFFERENT
            <div className="liner"></div>
          </header>
          <div
            ref={differentRef}
            className={`different_textContainer ${
              differentInView ? "animate_different" : ""
            }`}
          >
            <div className="different_header">We're the Whole Package</div>
            <div className="different_holder">
              As one of the industry’s leading engineering and IT services
              companies, Whitelist Technologies Ltd’s emphasis on quality
              combined with an innovative and customer focused approach to the
              provision of engineering, IT and consultancy services
              differentiates it from other organizations operating in the
              sector. We work with our clients from business analysis through
              design and development of your custom software applications,
              deployment and post deployment supports among other range of IT
              consultancy services we provide.
            </div>
          </div>
        </div>
      </StyledDifferent>
      <StyledContactUs ref={contactRef}>
        <div
          className={`address_holder ${contactInView ? "animate_address" : ""}`}
        >
          <header className="contact_us">CONTACT US</header>
          <div className="contact_subtext">
            Share the details of your project – like scope, timeframes, or
            business challenges you’d like to solve. Our team will carefully
            study them and then we’ll figure out the next move together.
          </div>

          <div className="address divide">
            <div className="speak_to_us address_divide">
              <div className="speak_tel">
                <header>Speak to us</header>
                <aside className="address_liner"></aside>

                <div className="tel_container">
                  <div className="tel">(+234)30444614</div>
                  <div className="tel">(+234)24700092</div>
                </div>

                <div className="email_container">
                  <header>Email us</header>
                  <aside className="email_liner"></aside>
                  <span>henagltd@gmail.com</span>
                </div>
              </div>
              <div className="speak_headOffice">
                <header>Visit WLT</header>
                <aside className="address_liner"></aside>
                <div className="speak_container">
                  <div className="main_address">Head Office</div>
                  <div className="sub_address">
                    10, Aimure Avenue, GRA, <br />
                    Benin City Edo State.
                  </div>
                  <div className="direction">Get directions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`form ${contactInView ? "animate_form" : ""}`}>
          <form id="form">
            <label>
              Name:
              <input type="text" name="name" />
            </label>

            <label>
              Email:
              <input type="text" name="name" />
            </label>
            <label>
              Phone No:
              <input type="text" name="name" />
            </label>

            <label>
              Company Name:
              <input type="text" name="name" />
            </label>

            <textarea placeholder="About Project"></textarea>
            <div className="submit">Submit</div>
          </form>
        </div>
      </StyledContactUs>
    </>
  );
}

export default Hero;
