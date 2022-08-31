import styled from "styled-components";
import { primaryColor, tertiaryColor } from "../../utils/Colors";

const StyledServiceDemo = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  transform: translateY(-80px);
  margin-top: 150px;

  .title {
    width: 100%;
    height: 50px;
    position: absolute;
    font-size: 18px;
    color: #747474;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    word-spacing: 2px;
    letter-spacing: 4px;
    padding-top: 20px;
    margin-left: 10%;
  }

  .liner {
    width: 100px;
    height: 2px;
    background-color: ${tertiaryColor};
    margin-top: 10px;
    transform: translateX(-20px);
  }

  .card {
    width: 360px;
    height: 80%;
    margin: auto;

    border-bottom: 4px solid ${primaryColor};
    transition: border 0.4s;
  }

  .cardtext_container {
    text-align: center;
    font-family: Helvetica, sans-serif;
  }

  .card_text {
    line-height: 1.5;
    text-align: start;
    padding: 4px;
    padding-left: 8px;
    font-size: 19px;
    width: 90%;
    padding-top: 20px;
  }

  .card_button a {
    color: #000;
  }

  .card:hover a {
    color: #fff;
  }

  .card:hover .cardtext_container {
    color: #fff;
  }

  .card:hover {
    border-bottom: 4px solid ${tertiaryColor};
  }

  .card_header {
    font-size: 35px;
    font-weight: 700;
    text-transform: capitalize;
    text-align: center;
    letter-spacing: -2px;
    width: 100%;
  }

  .cardtext_container {
    position: absolute;
    z-index: 3;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .button_container {
    width: 90%;
    position: absolute;
    bottom: 30px;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    text-align: start;
    font-size: 19px;
    font-weight: 800;
    line-height: 2;
    text-transform: uppercase;
    cursor: pointer;
  }

  .button_icon {
    background-color: ${primaryColor};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    color: #fff;
  }

  .image_container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-y: hidden;
  }

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 52, 92, 0.95);
    z-index: 2;
  }

  .image {
    width: 100%;
    height: 100%;
    transform: translateY(100%);
    transition: all 0.6s;
  }

  .image_container:hover .image {
    transform: translateY(0%);
  }

  @media (min-width: 769px) and (max-width: 1024px){
    & {
      flex-direction: row;
      height: auto;
      align-items: center;
      justify-content: space-around;
      width: 100%;
    }

    .title {
      position: absolute;
      top: 0;
      z-index: 10;
    }

    .card {
      width: 30%;
      height: 300px;
      margin: auto;
      margin-top: 50px;
    }

    .liner {
      transform: translateX(0px);
      height: 4px;
    }

    .card_header {
      font-weight: 700;
      font-size: 25px;
     
    }

    .card_text {
      font-size: 17px;

      padding: 0;
      margin-top: 10px;
    }

    .button_container {
      bottom: 8px;
      font-size: 15px;
      width: auto;
      margin: auto;
    }


  }

  @media (min-width: 481px) and (max-width: 768px) {
    & {
      flex-direction: column;
      height: auto;
      align-items: center;
      justify-content: space-around;
      width: 100%;
    }

    .title {
      position: absolute;
      top: 0;
      z-index: 10;
    }

    .card {
      width: 70%;
      height: 300px;
      margin: auto;
      margin-top: 50px;
    }

    .liner {
      transform: translateX(0px);
      height: 4px;
    }

    .card_header {
      font-weight: 700;
      font-size: 30px;
    }

    .card_text {
      font-size: 17px;

      padding: 0;
      margin-top: 10px;
    }

    .button_container {
      bottom: 8px;
      font-size: 15px;
      width: auto;
      margin: auto;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    & {
      flex-direction: column;
      height: 130vh;
      align-items: center;
      justify-content: space-around;
      width: 100%;
    }

    .title {
      position: absolute;
      top: 0;
      z-index: 10;
    }

    .card {
      width: 93%;
      height: 500px;
      margin: auto;
      margin-top: 50px;
    }

    .liner {
      transform: translateX(0px);
      height: 4px;
    }

    .card_header {
      font-weight: 700;
      font-size: 30px;
    }

    .card_text {
      font-size: 15px;

      padding: 0;
      margin-top: 10px;
    }

    .button_container {
      bottom: 8px;
      font-size: 15px;
      width: auto;
      margin: auto;
    }
  }
`;

export default StyledServiceDemo;
