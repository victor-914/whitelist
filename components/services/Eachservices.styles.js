import styled from "styled-components";

const StyledEachService = styled.div`
 
  border-radius: 5px;
  width: 30%;
  height: 80px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #fff;
  position: relative;
  padding-left: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  
  color: #fff;

  #svg {
    opacity: 1;
    z-index: 3;
    color: #000;
   
  }

  .arrow {
    color: #000;
   
    opacity: 1;
    position: relative;
    margin: 2px;
  
  }

  .title {
    color: #fff;
    font-size: 18px;
   
 font-weight: 900;
    text-align: center;
    line-height: 1.4; 
    text-transform: uppercase;
   
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
    height: 50px;
    margin: auto;
    margin-bottom: 10px;
    flex-direction: column;
  }

  .arrow {
    width: 80px;
    height: 80px;
  }

  .title {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
    line-height: 1.8;
    
  }

  @media (min-width: 481px) and (max-width: 767px) {
    width: 90%;
    height: 50px;
    margin: auto;
    margin-bottom: 10px;
    flex-direction: column;
  }

  .arrow {
    width: 50px;
    height: 50px;
  }

  .title {
    color: #000;
    font-size: 19px;
    font-weight: 00;
    text-align: center;
    line-height: 1.8;
   
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 90%;
    height: 80px;
    margin: auto;
    margin-bottom: 10px;
    flex-direction: column;
    justify-content: space-around;
   
  }

  .arrow {
  
    width: 30px;
    height: 30px;
    padding-top: 3px;
   
  }

  .title {
    color: #000;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 1.5;
  }
`;

export default StyledEachService;
