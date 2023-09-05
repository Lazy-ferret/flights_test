import React, { useEffect, useState } from 'react';
import shallow from 'zustand/shallow';
import { FlightsContentWrapper } from './FlightsContent.styles';
import FlightsCardsList from './FlightsCardsList/FlightsCardsList';
import Button from '../common/Button/Button';
import { sortFlights } from '../../services/sortFlights';
import { useSortingStore } from '../../stores/sortingStore';
import { useFilterStore } from '../../stores/filterStore';
import {
  filterByCarrier,
  filterByMaxPrice,
  filterByMinPrice,
  filterByTransfer
} from '../../services/filterFlightsService';
import { useFlightsStore } from '../../stores/flightsStore';
import { mockGetFlights } from '../../services/mockGetFlightsService';

const FlightsContent = () => {
  const {
    flights,
    setFlights,
    removeFlights
  } = useFlightsStore(state => state, shallow);
  const sortingMethod = useSortingStore(state => state.sortingMethod);
  const { transfer, minPrice, maxPrice, carrier } = useFilterStore(state => state);

  const [portion, setPortion] = useState(2);
  const [sortedFlights, setSortedFlights] = useState(flights);
  const [filteredFlights, setFilteredFlights] = useState(null);

  useEffect(() => {
    setFlights(mockGetFlights());
    return () => removeFlights();
  }, []);

  useEffect(() => {
    if (sortingMethod) {
      setSortedFlights(sortFlights(sortedFlights, sortingMethod));
    } else {
      setSortedFlights(flights);
    }
  }, [sortingMethod, flights]);

  useEffect(() => {
    let temp = structuredClone(sortedFlights);
    if (transfer) {
      temp = filterByTransfer(temp, transfer);
    }
    if (minPrice) {
      temp = filterByMinPrice(temp, minPrice);
    }
    if (maxPrice) {
      temp = filterByMaxPrice(temp, maxPrice);
    }
    if (carrier) {
      temp = filterByCarrier(temp, carrier);
    }
    setFilteredFlights(temp);
  }, [transfer, minPrice, maxPrice, carrier, sortedFlights]);

  const handleClick = () => {
    setPortion(prev => prev + 2);
  };

  return (
    <FlightsContentWrapper >
      <FlightsCardsList portion={portion} flights={filteredFlights} />
      <Button title={'Показать еще'} onClick={handleClick} />
    </FlightsContentWrapper>
  );
};

export default FlightsContent;
