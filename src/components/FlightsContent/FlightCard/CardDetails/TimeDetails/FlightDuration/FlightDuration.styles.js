import styled from 'styled-components';

export const FlightDurationWrapper = styled.div`
  position: absolute;
  z-index: 99;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  & div {
      margin-right: 5px;
      color: #000;
    position: absolute;
    margin-left: 2px;
    margin-top: 2px;
    width: 15px;
    height: 15px;
    position: relative;
    border: solid 1px currentColor;
    border-radius: 8px;
  }
  & div:before {
      content: '';
    position: absolute;
    top: 8px;
    left: 7px;
    width: 5px;
    height: 1px;
    background-color: currentColor;
    transform: skew(160deg, 50deg);  
  }
  & div:after {
      content: '';
    position: absolute;
    top: 1px;
    left: 7px;
    width: 1px;
    height: 7px;
    background-color: currentColor;
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
  }
`;
