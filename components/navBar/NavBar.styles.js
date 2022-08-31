import styled from "styled-components";
import {
  primaryColor,
  secondaryColor,
  tertiaryColor,
} from "../../utils/Colors";

const StyledNavBar = styled.section`
  width: 100%;
  height: 90px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  z-index: 300;
  position: fixed;
  background-color: transparent;

  .hamburger {
    display: none;
  }

  #cancel {
    display: none;
  }

  .logo_section {
    width: 30%;
    background-color: transparent;
    height: 100%;
  }

  .nav_content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* position: relative;DS,m vmvlk */
    width: 50%;
  }

  .nav_item {
    /* background-color:red; */
  }

  .nav_item {
    /* text-transform: uppercase; */
    font-size: 18px;
    font-weight: 500;
    letter-spacing: -1px;
    /* display: none; */
  }

  .nav_item {
    background-color: green;
  }

  .nav_item li {
    list-style: none;
  }

  .nav_item li:hover {
    color: ${tertiaryColor};
  }

  .call_section {
    background-color: #fff;
    width: 12%;
    text-align: center;
    height: 48%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    background-color: ${primaryColor};
    font-weight: 500;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
  }

  .call_icon {
  }

  .mobileMenuCover {
    width: 90%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    /* background-color: rgba(0, 0, 0, 0.9); */
    background-color: ${secondaryColor};
    animation: openMenu 0.2s ease-in 1;
    /* transform: translateX(-100%); */
  }

  @keyframes openMenu {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }

    /* 20%{
        transform: translateX(-60%);
      }

      50%{
        transform: translateX(100%);
      } */
    100% {
      opacity: 1;
      transform: translateX(100%);
    }
  }

  .icon_holder {
    /* background-color: red; */
    text-align: end;

    padding: 15px;
  }

  #cancel {
    font-size: 24px;
    display: block;
    text-align: end;
    position: absolute;
    right: 10px;
    padding: 10px;
    /* background-color: red; */
    color: ${tertiaryColor};
  }

  .menu {
    /* background-color: red; */
    /* position: absolute; */
    /* top: 20%; */
    margin-top: 50px;
  }

  .menu li {
    line-height: 2.5;
    width: 95%;
    margin: auto;
    list-style: none;
    padding-left: 2%;
    margin-bottom: 20px;

    /* text-transform: uppercase; */
    border: 1px solid ${tertiaryColor};
  }

  .li {
    /* background-color: red; */
  }

  .submenu {
    font-size: 18px;
    letter-spacing: 1px;
  }

  #submenu_li {
    font-size: 15px;
    width: 85%;

    letter-spacing: -0.5px;
  }

  #submenu_li li {
    width: 88%;
    border: none;
    /* padding-left: 4px; */
    background-color: ${tertiaryColor};
    /* background-image: linear-gradient(to right, #252b34, #016dac, #0089c8); */
  }

  .service_menu {
    z-index: 3;
  }

  /* .nav_item{
     color: red;
    } */

  .hamburger {
    /* color: red; */
  }

  .submenu_container {
    position: relative;
    /* background-color: green; */
    height: auto;
    text-align: center;
    width: auto;
    /* width: 100%; */
  }

  .service_title {
    text-align: center;

    transform: translateY(52px);

    font-size: 18px;
    letter-spacing: -1px;
    font-weight: 500;
  }

  .SHOW {
    visibility: visible;
  }

  .HIDE {
    visibility: hidden;
  }

  #submenu_list {
    position: relative;
    width: 100%;
    height: auto;

    color: #fff;
    padding: 0px 8px 0px 8px;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

    background-color: ${secondaryColor};

    line-height: 2.3;
    font-size: 15px;
    text-align: start;
    list-style: none;
    cursor: pointer;

    transform: translateY(60px);
    transition: all 1s;

    font-weight: 500;
  }

  #submenu_list::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 100%;
    z-index: -1;
    left: 0;
    transition: all 0.5s;
    background-color: ${tertiaryColor};
    /* background-color: ${secondaryColor}; */
  }

  #submenu_list:hover::before {
    width: 100%;
    transition: all 0.5s;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    & {
      height: 60px;
      /* display: none; */
    }

    .nav_content {
      display: none;
    }

    .call_section {
      display: none;
    }

    .hamburger {
      font-size: 30px;
      display: block;
      /* background-color: red; */
    }
  }

  @media (min-width: 481px) and (max-width: 768px) {
    & {
      height: 60px;
      /* display: none; */
    }

    .nav_content {
      display: none;
    }

    .call_section {
      display: none;
    }

    .hamburger {
      font-size: 30px;
      display: block;
      /* background-color: red; */
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    & {
      height: 60px;
      /* display: none; */
    }

    .nav_content {
      display: none;
    }

    .call_section {
      display: none;
    }

    .hamburger {
      font-size: 25px;
      display: block;
      /* background-color: red; */
      padding: 8px;
    }
  }
`;

export default StyledNavBar;
