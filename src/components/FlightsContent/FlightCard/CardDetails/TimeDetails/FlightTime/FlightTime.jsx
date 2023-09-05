import React from 'react';
import { FlightTimeWrapper } from './FlightTime.styles';

const FlightTime = ({ time }) => {

  return (
    <FlightTimeWrapper >
      {time}
    </FlightTimeWrapper>
  );
};

export default FlightTime;
