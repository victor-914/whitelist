import styled from "styled-components";

import {tertiaryColor } from "../../utils/Colors";

const StyledApproach = styled.section`
  width: 95%;
  height: 600px;
  margin: auto;
  position: relative;
  margin-bottom: 80px;

  .cover {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: #000;
    opacity: 0.5;
  }
  .globe {
    width: 100px;
    height: 100px;
    position: absolute;
   
  }

  .approach_text {
    width: 45%;
    height: 100%;
    position: absolute;
    right: 0;
    z-index: 4;
    color: white;
    
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
  }

  .liner {
    width: 100px;
    height: 2px;
    background-color: ${tertiaryColor};
    margin-top: 10px;
    transform: translateX(-20px);
  }

  .appro_header {
    line-height: 2;
    font-weight: 800;
    font-size: 40px;
  }

  .approach_textContainer{
    opacity: 0;
  }

  .animate_approach {
    animation: animate_approach 0.6s ease-out  1;
    opacity: 1;
  }

  @keyframes animate_approach {
    0% {
      opacity: 0;
      letter-spacing:-100px ;
    }

    30% {
      opacity: 1;
      letter-spacing:-7px ;
    }

    100% {
      opacity: 1;
      letter-spacing:-2px ;
    }
  }

  .appro_text-holder {
    width: 80%;
    line-height: 1.5;
    height: 100%;
    margin: auto;
  }

  

  @media (min-width: 320px) and (max-width: 480px) {
    & {
     width: 100%;
     height:500px;
    }

    .approach_text{
     
      width: 95%;
      margin: auto;
    }

     .liner{
      transform: translateX(0px);
     }

     .appro_header {
    line-height: 2;
    font-weight: 600;
    font-size: 30px;
  }

  .appro_text-holder {
    width: 95%;
    line-height: 1.5;
    height: 100%;
    margin: auto;
    font-size: 14px;
  }

}
    


  @media (min-width: 481px) and (max-width: 768px) {
    & {
     width: 100%;
     height:400px;
    
    }

    .approach_text{
    
      width: 95%;
      margin: auto;
      
    }

     .liner{
      transform: translateX(0px);
     }

     .appro_header {
    line-height: 2;
    font-weight: 600;
    font-size: 35px;
  }

  .appro_text-holder {
    width: 95%;
    line-height: 1.5;
    height: 100%;
    margin: auto;
    font-size: 16px;
  }
    
  }

  @media (min-width: 769px) and (max-width: 1024px) {

    & {
     width: 100%;
     height:400px;
    
    }

    .approach_text{
    
      width: 95%;
      margin: auto;
      
    }

     .liner{
      transform: translateX(0px);
     }

     .appro_header {
    line-height: 2;
    font-weight: 600;
    font-size: 35px;
  }

  .appro_text-holder {
    width: 95%;
    line-height: 1.5;
    height: 100%;
    margin: auto;
    font-size: 16px;

  }

  
}

    
  
`;

export default StyledApproach;
