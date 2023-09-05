import React from 'react';
import { FlightPriceWrapper } from './FlightPrice.styles';

function FlightPrice({ price }) {

  return (
    <FlightPriceWrapper >
      <div>{price} ₽</div>
      <span>Стоимость для одного взрослого пассажира</span>
    </FlightPriceWrapper>
  );
}

export default FlightPrice;
