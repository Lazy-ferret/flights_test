import React from 'react';
import { ChooseFlightBtnWrapper } from './ChooseFlightBtn.styles';

const ChooseFlightBtn = ({ title, onClick }) => {

  return (
    <ChooseFlightBtnWrapper onClick={onClick}>
      {title.toUpperCase()}
    </ChooseFlightBtnWrapper>
  );
};

export default ChooseFlightBtn;
