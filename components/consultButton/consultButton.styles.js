import styled from "styled-components";

const StyledConsultButton = styled.div`
  border: 2px solid #fff;
  width: 27%;
  line-height: 2.5;
  font-weight: 700;
  height: auto;
  cursor: pointer;
  display: flex;
  /* margin: auto; */
  align-items: center;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: 600;
  
  
  a {
    
    /* background-color: red; */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  a div {
    padding-right: 5px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    line-height: 1.5;
    font-weight: 300;
    width: 27%;
    /* margin: auto; */
    letter-spacing: -1px;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 8px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a div {
    padding-right: 5px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    line-height: 1.5;
    font-weight: 300;
    width: 38%;
    margin: auto;
    letter-spacing: -1px;
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 8px;

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    a div {
      padding-right: 5px;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    line-height: 1.5;
    font-weight: 300;
    width: 70%;
    margin: auto;
    letter-spacing: -1px;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 8px;
  }
`;

export default StyledConsultButton;
