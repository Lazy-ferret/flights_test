import React from 'react';
import { FlightDurationWrapper } from './FlightDuration.styles';

const FlightDuration = ({ duration }) => {

  return (
    <FlightDurationWrapper >
      <div />
      {duration}
    </FlightDurationWrapper>
  );
};

export default FlightDuration;
