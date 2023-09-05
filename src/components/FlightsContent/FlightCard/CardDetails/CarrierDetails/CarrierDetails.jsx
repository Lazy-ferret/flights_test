import React from 'react';
import { CarrierDetailsWrapper } from './CarrierDetails.styles';

const CarrierDetails = ({ carrier }) => {

  return (
    <CarrierDetailsWrapper >
      Рейс выполняет: {carrier}
    </CarrierDetailsWrapper>
  );
};

export default CarrierDetails;
