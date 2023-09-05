import React from 'react';
import { FlightDateWrapper } from './FlightDate.styles';

const FlightDate = ({ date }) => {

  return (
    <FlightDateWrapper >
      {date}
    </FlightDateWrapper>
  );
};

export default FlightDate;
