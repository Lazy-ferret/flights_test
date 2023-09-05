import React from 'react';
import { FlightCardWrapper } from './FlightCard.styles';
import CardHeader from './CardHeader/CardHeader';
import CardDetails from './CardDetails/CardDetails';
import { Separator } from '../../common/Separator/Separator';
import ChooseFlightBtn from './ChooseFlightBtn/ChooseFlightBtn';
import { useCurrentFlightStore } from '../../../stores/currentFlightStore';

function FlightCard({ flight }) {
  const { setCurrentFlight } = useCurrentFlightStore(state => (state));

  const price = flight.flight.price.total.amount;
  const carrierUid = flight.flight.carrier.uid;

  const forwardDirectionData = flight.flight.legs[0];
  const backwardDirectionData = flight.flight.legs.length > 1
    ? flight.flight.legs.toReversed()[0]
    : null;

  const handleChooseFlight = () => {
    setCurrentFlight(flight);
  };

  return (
    <FlightCardWrapper >
      <>
        <CardHeader price={price} carrierUid={carrierUid} />
        <CardDetails flightData={forwardDirectionData} />
        {backwardDirectionData && <Separator />}
        {backwardDirectionData && <CardDetails flightData={backwardDirectionData} />}
        <ChooseFlightBtn title='Выбрать' onClick={handleChooseFlight} />
      </>
    </FlightCardWrapper>
  );
}

export default FlightCard;
