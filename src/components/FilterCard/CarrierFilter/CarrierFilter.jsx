import React, { useEffect, useState } from 'react';
import { CarrierFilterWrapper } from './CarrierFilter.styles';
import { useFlightsStore } from '../../../stores/flightsStore';
import { filterByCarrier } from '../../../services/filterFlightsService';
import { sortFlights } from '../../../services/sortFlights';

const CarrierFilter = ({ onChange }) => {
  const flights = useFlightsStore(state => state.flights);
  const [carriers, setCarriers] = useState([]);

  const findMinPrice = (flightsArr, carrier) => {
    const carrierArr = [];
    carrierArr.push(carrier);
    const filteredArr = filterByCarrier(flightsArr, carrierArr);
    const sortedArr = sortFlights(filteredArr, 'byPriceAscend');
    const minPrice = sortedArr[0].flight.price.total.amount;
    return <span>от {minPrice} р.</span>;
  };

  useEffect(() => {
    if (flights) {
      const carriersList = new Set(flights
        .filter(flight => flight.flight.carrier.caption)
        .map(flight => flight.flight.carrier.caption));
      setCarriers(Array.from(carriersList));
    }
  }, [flights]);

  return (
    <CarrierFilterWrapper >
      {carriers && carriers.map(carrier => {
        return <div key={carrier}>
          <label >
            <input type='checkbox'
              name={carrier}
              onChange={onChange} />
            - {carrier}
          </label>
          {findMinPrice(flights, carrier)}
        </div>;
      }
      )}
    </CarrierFilterWrapper>
  );
};

export default CarrierFilter;
