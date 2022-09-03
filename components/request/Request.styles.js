import styled from "styled-components";
import { secondaryColor } from "../../utils/Colors";

const StyledRequest = styled.section`
  width: 95%;
  height: 500px;
  margin: auto;
  background-color: ${secondaryColor};
  transform: translateY(-100px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #fff;
   z-index: 100 !important;
  .main_text {
    font-size: 40px;
    width: 50%;
    height: 80%;
    text-align: center;
    display: flex;
    margin-top: 30px;
    place-items: center;
    
    letter-spacing: -2px;
  }

  .main_text_subcontainer {
    padding: 20px;
    margin-left: 40px;
    opacity: 0;
    transform: scale(1);
  }

  .animate_scale {
    animation: animate_scale 1.4s ease-in 0ms 1;
    opacity: 1;
  }

  @keyframes animate_scale {
    0% {
      opacity: 0;
      transform: scale(0);
      transform: translateX(-30%);
    }

    50% {
      opacity: 1;
      transform: translateX(0%);
      transform: scale(1.1);
    }
  }

  .container {
    display: flex;
    color: #fff;
    width: 50%;
    margin: auto;
    flex-direction: column;
    justify-content: space-between;
    height: 90%;
    padding-top: 20px;
    padding-bottom: 20px;
    
  }

  
  header {
    font-weight: 700;
    font-size: 35px;
    text-align: center;
  
    letter-spacing: -1px;
    word-spacing: 1px;
  
  }

  .text_holder {
    width: 50%;
    margin: auto;
    line-height: 1.5;
    margin-top: 5px;
    font-size: 16px;
    
  }

  .request {
    background-color: red;
  }

  @media (min-width: 769px) and (max-width: 1024px) {

    & {
      height: auto;
      flex-direction: row;
    }

    .main_text {
      width: 100%;
      font-size: 30px;

      width: 90%;
      margin: auto;
    }

    .container {
      width: 95%;
    }

    header {
      font-size: 25px;
      font-weight: 600;

      margin-bottom: 10px;

      color: white;
    }

    .text_holder {
      width: 70%;
      margin: auto;
      margin-bottom: 20px;
      font-size: 15px;
    }

  }

  @media (min-width: 481px) and (max-width: 768px) {
    & {
      height: auto;
      flex-direction: column;
    }

    .main_text {
      width: 100%;
      font-size: 30px;

      width: 90%;
      margin: auto;
    }

    .container {
      width: 95%;
    }

    header {
      font-size: 25px;
      font-weight: 600;

      margin-bottom: 10px;

      color: white;
    }

    .text_holder {
      width: 70%;
      margin: auto;
      margin-bottom: 20px;
      font-size: 15px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    & {
      height: auto;
      flex-direction: column;
    }

    .main_text {
      width: 100%;
      font-size: 30px;
    }

    .main_text_subcontainer {
      padding: 20px;
      margin-left: 0;
    }

    .container {
      width: 95%;
    }

    header {
      font-size: 25px;
      font-weight: 600;

      margin-bottom: 10px;

      color: white;
    }

    .text_holder {
      width: 70%;
      margin: auto;
      margin-bottom: 20px;
      font-size: 14px;
    }
  }
`;

export default StyledRequest;
