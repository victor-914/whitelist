import { tertiaryColor } from "../../utils/Colors";
const { default: styled } = require("styled-components");

const StyledDifferent = styled.section`
  width: 95%;
  height: 500px;
  position: relative;
  margin: auto;
  margin-bottom: 50px;

  .different_img {
    position: absolute;
    z-index: 1;
  }

  .cover {
    width: 100%;
    height: 100%;
    background-color: #000;
    position: absolute;
    z-index: 2;
    opacity: 0.5;
  }

  header {
    font-size: 18px;
    color: #747474;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    word-spacing: 2px;
    letter-spacing: 4px;
    padding-top: 20px;
    padding-left: 30px;
  }

  .liner {
    width: 100px;
    height: 2px;
    background-color: ${tertiaryColor};
    margin-top: 10px;
    transform: translateX(-20px);
  }

  .different_text {
    width: 50%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 4;
    color: white;
    line-height: 1.5;

    padding-left: 10px;
  }

  .different_header {
    line-height: 2;
    font-weight: 800;
    font-size: 40px;
    margin-left: 15px;
  }

  .different_holder {
    width: 70%;
    line-height: 2;
    height: 100%;
    padding-left: 10px;
    margin-left: 10px;
  }

  .different_textContainer {
    opacity: 0;
  }

  .animate_different {
    animation: animate_different 1s ease-out 1;
    opacity: 1;
  }

  @keyframes animate_different {
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

  @media (min-width: 481px) and (max-width: 1200px) {
    & {
      height: 450px;
      padding-bottom: 30px;
    }

    .different_text {
      width: 60%;
      margin: auto;
      font-size: 18px;
      line-height: 2;
      padding-left: 0px;
    }

    .different_header {
      font-size: 20px;
      margin-left: 0px;
      padding-left: 5px;
      padding-top: 8px;
      width: 95%;

      margin: auto;
    }

    .different_holder {
      width: 95%;
      line-height: 1.5;
      font-size: 15px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    & {
      height: 450px;
      padding-bottom: 30px;
    }

    .different_text {
      width: 95%;
      margin: auto;
      padding-left: 0px;
    }

    .different_header {
      font-size: 20px;
      margin-left: 0px;
      padding-left: 5px;
      padding-top: 8px;
      width: 95%;
      margin: auto;
    }

    .different_holder {
      width: 95%;
      line-height: 1.5;
      font-size: 15px;
    }
  }
`;

export default StyledDifferent;
