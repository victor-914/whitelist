import styled from "styled-components";
import {
    primaryColor,
    secondaryColor,
    tertiaryColor,
  } from "../../utils/Colors";
  
const StyledEngineering = styled.section`
  width: 100%;
  height: auto;
  position: relative;
  margin: auto;
  background-color:${secondaryColor};
  padding-bottom: 10px;

  .sub_Nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    width: 8%;
    padding: 10px;
    position: absolute;
    top: 100px;
    color: WHITE;
    font-size: 12px;
  }

  .arrow {
    opacity: 0.5;
    padding-top: 2px;
  }

  .sub_Nav a:hover {
    color: ${tertiaryColor};
  }

  .hero_service {
    width: 100%;
    height: 500px;
    position: relative;
   
  }

  .img_holder {
    width: 100%;
    height: 100%;
  }

  .cover {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
  }

  .service_img {
    position: absolute;
  }

  .hero_text {
    position: absolute;
    left: 30px;
    bottom: 10%;
    width: 70%;
    color: #fff;
    z-index: 4;
  }

  .hero_text header {
    font-weight: 700;
    font-size: 40px;
    letter-spacing: -1px;
    line-height: 2;
    text-shadow: 2px 2px #000;
    text-transform: uppercase;
  }

  .hero_text header span {
    color: ${primaryColor};
  }

  .highlight {
    color: ${tertiaryColor};

    text-shadow: 2px 2px #000;
  }

  .text {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    line-height: 1.2;
    font-weight: 300;
    padding: 10px;
    letter-spacing: -1px;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .request_btn {
    border: 2px solid #fff;
    margin-top: 20px;
    margin-left: 30px;
    width: 28%;
    text-align: center;
    line-height: 2.5;
    font-weight: 700;
    height: auto;
    cursor: pointer;
    
  }

  .consult_header {
    font-size: 40px;
    margin-top: 40px;
    line-height: 1.5;
    font-weight: 600;
    letter-spacing: -1px;

    margin-left: 30px;
  }

  .liner {
    width: 100px;
    height: 3px;
    background-color: ${tertiaryColor};
    transform: translateX(-20px);
  }

  .animate_from_right {
    animation: animate_from_right 0.5s ease-in  1;
    visibility:visible;
  }

  @keyframes animate_from_right {
    0% {
    
      transform: translateX(5%);
    }

    50% {
      transform: translateX(0%);
      opacity: 1;
      visibility:visible;
    }

    100%{
      visibility:visible;
    }
  }

  .animate_from_leftconsult {
    animation: animate_from_leftconsult 1s ease-in-out  1;
    visibility:visible;
  }

  @keyframes animate_from_leftconsult {
    0% {
    
      transform: translateX(-40%);
    }

    50% {
      transform: translateX(0%);
      opacity: 1;
      visibility:visible;
    }

    100%{
      visibility:visible;
    }
  }

  .each_service {
    background-color: #fff;
    width: 100%;
    height:auto;
    margin: auto;
    opacity: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
 
    background-color: ${secondaryColor};
   
  }

  .per_serviceContainer {
    width: 93%;
    height:auto;
    margin: auto;
    margin-top:50px;
  
  }

  .header_text {
  
    height: 50px;
    width: 70%;
    color: #fff;
   display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    font-size: 20px;
    letter-spacing: -1px;
    border-radius: 5px;
    text-transform: uppercase;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background-image: linear-gradient(to right, #252b34, #016dac, #0089c8);
  }

  .container {
    width: 93%;
    margin: auto;
   
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    height:300px;
    color: #fff;
    background-color: ${secondaryColor};
   opacity: 0;
  }

  #container_single{
     height: 200px;
  }
  .software {
    opacity: 0;
  }

  .software_CONSULTING {
    animation: software_CONSULTIG 1.3s ease-in-out 1;
    opacity: 1;  
  }

  @keyframes software_CONSULTIG {
    0% {
      transform: translateX(40%);
    }

    50% {
      transform: translateX(0%);
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }


  @media (min-width: 769px) and (max-width: 1024px) {
    .sub_Nav {
      width: 12%;
      top: 80px;
     
    }

    .hero_text {
      width: 100%;
      bottom: 8%;
      left: 0px;
     
    }

    .hero_text header {
      font-size: 30px;
      line-height: 1.5;
      text-align: center;
      word-spacing: 10px;
      padding-left: 10px;
      margin-bottom: 10px;
    }

    .text {
      text-align: center;

      font-weight: 300;
      width: 80%;
      margin: auto;
      padding-left: 14px;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    .sub_Nav {
      width: 20%;
      top: 80px;
     
    }

    .hero_text {
      width: 100%;
      bottom: 8%;
      left: 0px;
      
    }

    .hero_text header {
      font-size: 28px;
      line-height: 1.5;
      text-align: center;
   word-spacing: 10px;
      padding-left: 10px;
      margin-bottom: 10px;
    }

    .text {
      text-align: center;

      font-weight: 300;
      padding-left: 14px;
    }


   
     
    .sub_Nav {
      width: 25%;
      top: 80px;
     
    }

    .hero_text {
      width: 100%;
      bottom: 8%;
      left: 0px;
    }

    .hero_text header {
      font-size: 28px;
      line-height: 1.2;
      text-align: center;

      padding-left: 10px;
      margin-bottom: 10px;
    }

    .text {
      text-align: center;

      font-weight: 300;
      padding-left: 14px;
    }


    .per_serviceContainer{
      
      width: 100%;
    }

    .container{
      width: 100%;
      flex-direction: column;
      align-items: center;
      height: auto;
   
      
    }

    .header_text{
     width:80%;
   
     margin-bottom: 10px;
     font-size: 16px;
    }

  }

  @media (min-width: 320px) and (max-width: 480px) {
     
   
    padding-bottom: 10px;
    .sub_Nav {
      width: 28%;
      top: 80px;
    }

    .hero_text {
      width: 100%;
      bottom: 8%;
      left: 0px;
    }

    .hero_text header {
      font-size: 28px;
      line-height: 1.2;
      text-align: center;

      padding-left: 10px;
      margin-bottom: 10px;
    }

    .text {
      text-align: center;

      font-weight: 300;
      padding-left: 14px;
    }


   

    .per_serviceContainer{
     
      width: 100%;
    }

    .container{
      width: 100%;
      flex-direction: column;
      align-items: center;
      height: auto;
      
    }

    .header_text{
     width:90%;
    
     margin-bottom: 10px;
     font-size: 16px;
     letter-spacing:-0.5px;
    }
  }

`;

export default StyledEngineering;
