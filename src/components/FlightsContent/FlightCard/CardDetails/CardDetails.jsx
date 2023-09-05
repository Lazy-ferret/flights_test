import React from 'react';
import { CardDetailsWrapper } from './CardDetails.styles';
import RouteDetails from './RouteDetails/RouteDetails';
import TimeDetails from './TimeDetails/TimeDetails';
import TransferDetails from './TransferDetails/TransferDetails';
import CarrierDetails from './CarrierDetails/CarrierDetails';

const CardDetails = ({ flightData }) => {
  const carrier = flightData.segments[0].airline.caption;

  return (
    <CardDetailsWrapper >
      <RouteDetails flightData={flightData} />
      <TimeDetails flightData={flightData} />
      <TransferDetails flightData={flightData} />
      <CarrierDetails carrier={carrier} />
    </CardDetailsWrapper>
  );
};

export default CardDetails;
