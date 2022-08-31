import styled from "styled-components";
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from "../../utils/Colors";

const StyledAccelerate = styled.section`
  width: 100%;
  height: 500px;
  margin: auto;
  position: relative;
  margin-bottom: 80px;

  .img {
    position: absolute;
    z-index: 1;
  }

  .accelerate_container {
    z-index: 10;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    height: 100%;
    position: absolute;
  }

  .accelerate_subcontainer {
  }

  .accelerate_header {
    font-size: 50px;
    font-weight: 700;
    text-align: center;
    letter-spacing: -2px;
    text-transform: capitalize;
    text-shadow: 2px 2px #000;
    opacity: 0;
  }

  .animate_accelerate {
    animation: animate_accelerate 1s ease-out 1;
    opacity: 1;
  }

  @keyframes animate_accelerate {
    0% {
      opacity: 0;
      letter-spacing: -100px;
    }

    30% {
      opacity: 1;
      letter-spacing: -7px;
    }

    100% {
      opacity: 1;
      letter-spacing: -2px;
    }
  }

  .subtext {
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 18px;
    font-weight: 500;

    text-align: center;
    margin-top: 20px;
    padding: 10px;
  }

  #consult {
    text-align: center;
    font-weight: 600;
    letter-spacing: -1px;
    word-spacing: 5px;
    width: 40%;
    margin: auto;
    margin-top: 50px;
    line-height: 2.5;
    font-size: 20px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border: 3px solid #fff;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
    z-index: 10;
  }

  #consult:hover {
    background-color: ${secondaryColor};
    text-align: center;
    transition: all 0.3s;
    cursor: pointer;
  }

  @media (min-width: 481px) and (max-width: 1200px) {
    & {
      /* display: none; */
      height: 400px;
      margin-bottom: 0;
      transform: translateY(-50px);
    }

    .accelerate_header {
      font-size: 30px;
      font-weight: 700;
    }

    .subtext {
      width: 100%;

      margin: auto;
      margin-top: 20px;
      font-size: 17px;

      font-weight: normal;
      background-color: rgba(0, 0, 0, 0.7);
    }

    #consult {
      line-height: 2;
      font-weight: 600;
      width: 50%;
      border: 2px solid #fff;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    & {
      height: 400px;
      margin-bottom: 0;
      transform: translateY(-50px);
    }

    .accelerate_header {
      font-size: 30px;
      font-weight: 500;
    }

    .subtext {
      width: 90%;
      margin: auto;
      margin-top: 20px;
      font-size: 16px;

      font-weight: normal;
      background-color: rgba(0, 0, 0, 0.7);
    }

    #consult {
      line-height: 2;
      font-weight: 600;
      width: 70%;
      border: 2px solid #fff;
    }
  }
`;

export default StyledAccelerate;
