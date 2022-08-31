import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from "../../utils/Colors";
const { default: styled } = require("styled-components");

const StyledContactUs = styled.section`
  width: 95%;
  height: 700px;
  margin: auto;
  margin-bottom: 40px;

  display: flex;
  flex-direction: row;
  color: ${secondaryColor};
  margin-top: 80px;
  position: relative;

  .address_holder {
    padding-top: 5%;
    width: 50%;
    height: 100%;
  }

  .animate_address {
    animation: animate_address 1s ease-in 1;
    opacity: 1;
  }

  @keyframes animate_address {
    0% {
      transform: translateX(-80%);
      opacity: 1;
    }

    50% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  .contact_us {
    font-size: 40px;
    font-weight: 900;
    letter-spacing: -1px;
    line-height: 2;
    padding-left: 20px;
  }

  .contact_subtext {
    line-height: 1.5;
    width: 60%;
    padding-left: 20px;
  }

  .form {
    width: 50%;
    height: 100%;
  }

  #form {
    width: 100%;
    height: 100%;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
    background-color: ${secondaryColor};
    padding: 10px;
    position: relative;
  }

  label {
    margin: 10px;
    font-weight: 800;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 40px;
    margin-top: 4px;
  }

  textarea {
    margin: 10px;
    margin-top: 30px;
    height: 150px;
    resize: none;
  }

  .submit {
    line-height: 2.6;

    width: 30%;
    margin: auto;
    margin-left: 40px;
    font-weight: 800;
    position: absolute;
    bottom: 30px;
    text-align: center;
    background-color: ${tertiaryColor};
    cursor: pointer;
  }

  .address {
    z-index: 100;
    color: ${secondaryColor};
  }

  .speak_to_us {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .speak_tel {
    width: 50%;
  }

  .tel {
    font-size: 30px;
    font-weight: 700;
    padding-left: 20px;
    line-height: 2;
  }

  .email_container {
    font-size: 30px;
    font-weight: 700;
    line-height: 2;
    margin-top: 40px;
  }

  .email_container span {
    padding-left: 15px;
  }

  .email_liner {
    width: 100px;
    height: 3px;
    background-color: ${tertiaryColor};
    margin-top: 20px;
  }

  .speak_headOffice {
    width: 50%;
  }

  .address header {
    font-size: 15px;
    text-transform: uppercase;
    padding-top: 30px;
    padding-left: 20px;
    font-weight: 700;

    letter-spacing: 2px;
  }

  .address_divide {
    width: 100%;
    height: 50%;
  }

  .address_liner {
    width: 100px;
    height: 3px;
    background-color: ${tertiaryColor};
    margin-top: 20px;
  }

  .other_office {
    padding-top: 80px;
  }

  .address_container {
    display: flex;
  }

  .office {
    width: 50%;
  }

  .main_address {
    font-size: 30px;
    font-weight: 700;
    line-height: 2;
    padding-left: 15px;
  }

  .sub_address {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    padding-left: 15px;
  }

  .direction {
    text-transform: uppercase;
    font-size: 17px;
    font-weight: 700;
    margin-top: 18px;
    padding-left: 15px;
    color: ${primaryColor};
  }

  .animate_form {
    animation: animate_form 1s ease-out 1;
    opacity: 1;
  }

  @keyframes animate_form {
    0% {
      transform: translateX(40%);
    }

    50% {
      transform: translateX(0%);
      opacity: 1;
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    & {
      display: flex;
      flex-direction: column;
      height: auto;
    }

    .address_holder {
      width: 100%;
    }

    .contact_us {
      font-size: 28px;
      font-weight: 700;
    }

    .contact_subtext {
      width: 75%;

      font-size: 17px;
      padding-left: 10px;
    }

    .speak_tel {
      width: 80%;
      margin: auto;
    }

    .address_liner {
      margin-top: 5px;
    }

    .speak_to_us {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }

    .tel {
      font-size: 20px;
    }

    .email_container {
      margin-top: 10px;
    }

    .email_container span {
      font-size: 20px;
    }

    .email_liner {
      margin-top: 5px;
    }

    .form {
      width: 90%;
      margin: auto;
      margin-top: 20px;
      margin-bottom: 50px;
    }

    #form {
      width: 95%;
      margin: auto;
    }

    label {
      font-weight: 500;
    }

    .submit {
      background-color: red;
      line-height: 2.5;
      bottom: -50px;
      text-align: center;
      width: 40%;
      padding-left: 0px;
      text-transform: capitalize;

      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      background-color: ${tertiaryColor};
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    & {
      display: flex;
      flex-direction: column;
      height: auto;
    }

    .address_holder {
      width: 100%;
    }

    .contact_us {
      font-size: 28px;
      font-weight: 700;
    }

    .contact_subtext {
      width: 95%;
      margin: auto;
      font-size: 14px;
      padding: 0;
    }

    .speak_tel {
      width: 95%;
      margin: auto;
    }

    .address_liner {
      margin-top: 5px;
    }

    .speak_to_us {
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    .tel {
      font-size: 20px;
    }

    .email_container {
      margin-top: 10px;
    }

    .email_container span {
      font-size: 20px;
    }

    .email_liner {
      margin-top: 5px;
    }

    .speak_headOffice {
      display: none;
    }

    .form {
      width: 96%;

      margin-top: 20px;
      margin-bottom: 50px;
    }

    label {
      font-weight: 500;
    }

    .submit {
      line-height: 2.5;
      bottom: -50px;
      text-align: center;
      width: 40%;
      /* padding-left: 0px; */
      text-transform: capitalize;
      margin: auto;

      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
      background-color: ${tertiaryColor};
    }
  }
`;

export default StyledContactUs;
