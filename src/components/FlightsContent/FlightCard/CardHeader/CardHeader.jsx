import React from 'react';
import { CardHeaderWrapper } from './CardHeader.styles';
import CarrierLogo from './CarrierLogo/CarrierLogo';
import FlightPrice from './FlightPrice/FlightPrice';

function CardHeader({ carrierUid, price }) {

  return (
    <CardHeaderWrapper >
      <CarrierLogo carrierUid={carrierUid} />
      <FlightPrice price={price} />
    </CardHeaderWrapper>
  );
}

export default CardHeader;
