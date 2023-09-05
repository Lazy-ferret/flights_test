import React from 'react';
import { useMemo } from 'react';
import { FlightsCardsListWrapper } from './FlightsCardsList.styles';
import FlightCard from '../FlightCard/FlightCard';

function FlightsCardsList({ portion, flights }) {
  const memoFlights = useMemo(
    () => flights && flights.filter(flight => flights.indexOf(flight) < portion).map(flight => {
      return <FlightCard
        flight={flight}
        key={flight.flightToken} />;
    }), [flights, portion]);

  return (
    <FlightsCardsListWrapper >
      {flights && memoFlights}
    </FlightsCardsListWrapper>
  );
}

export default FlightsCardsList;
