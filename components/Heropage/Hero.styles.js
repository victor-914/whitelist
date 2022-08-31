import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../utils/Colors";

const StyledHero = styled.section`
  
  background-image: linear-gradient(to right, #1c2237, #016dac, #0089c8);
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  
  .it{
    color: ${primaryColor};
  }
  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.4;
  }

  .opcty {
    visibility: hidden;
  }


  .hero_text_animation{
    color: ${primaryColor};
  }


  .hero_text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
  }

  .page_title {
    font-size: calc(20px + 30 * ((100vw - 960px) / 540));
    line-height: calc(30px + 35 * ((100vw - 960px) / 540));
    font-weight: 800;
    text-align: center;
    margin-bottom: 180px;
    font-family: Helvetica, serif;
    z-index: 10;
    color: white;
    display: flex;
    flex-direction: row;
    width: 80%;
    justify-content: space-between;
    align-items: center;
    word-spacing: 3px;
    visibility: hidden;
    letter-spacing: -2px;
    text-shadow: 2px 2px #000;
  }

  .animate_from_right {
    animation: animate_from_right 2s ease-in 1;
    visibility: visible;
    
  }

  @keyframes animate_from_right {
    0% {
      transform: translateX(40%);
    }

    50% {
      transform: translateX(0%);
      opacity: 1;
      visibility: visible;
    }

    100% {
      visibility: visible;
    }
  }

  .subText_container {
    background-color: ${secondaryColor};
    width: 100%;
    height: 40em;
    z-index: 10;
    position: absolute;
    top: 100%;
  }

  .title_liner {
    width: 22%;
    height: 3px;
    background-color: red;
    margin-top: 10px;
    transform: translateX(-20px);
  }

  .page_subtitle {
    font-size: calc(18px + 7 * ((100vw - 767px) / 733));
    margin-bottom: 30px;
    line-height: calc(25px + 10 * ((100vw - 767px) / 733));
  }

  .button_container {
    display: flex;

    align-items: center;
    margin: 20px;
    text-align: start;
  }

  .button_text {
    line-height: 2;
    margin-top: 30px;
    font-weight: 800;
    font-size: 18px;
    letter-spacing: 1px;
  }

  .button_icon {
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-top: 25px;
    color: red;
  }

  
  .image_circle {
    width: 550px;
    height: 550px;
    overflow: hidden;
    border-radius: 50%;

    position: absolute;
    right: -60px;
    top: 80px;
    z-index: 8;
  }

  #hero_img {
    width: 500px !important;
    height: 500px !important;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    & {
      height: 70vh;
    
    }

    .cover {
      opacity: 0.7;
    }
    .page_title{
      font-size: calc(40px + 30 * ((100vw - 960px) / 540));
    line-height: calc(18px + 35 * ((100vw - 960px) / 540));
   height: 100PX;
    width: 100%;
   display: FLEX;
   flex-direction: column;
    }

  }

  @media (min-width: 481px) and (max-width: 768px) {
    & {
      height: 70vh;
      
    }

    .cover {
      opacity: 0.7;
    }
    .page_title{
      font-size: calc(50px + 30 * ((100vw - 960px) / 540));
    line-height: calc(18px + 35 * ((100vw - 960px) / 540));
   height: 100PX;
    width: 100%;
   display: FLEX;
   flex-direction: column;
    }

    
  }

  @media (min-width: 320px) and (max-width: 480px) {
    & {
      height: 70vh;
    }

    .cover {
      opacity: 0.7;
    }
    .page_title{
      font-size: calc(55px + 30 * ((100vw - 960px) / 540));
    line-height: calc(15px + 35 * ((100vw - 960px) / 540));
   height: 100PX;
    width: 100%;
   display: FLEX;
   flex-direction: column;
    }

    
  }
`;

export default StyledHero;
