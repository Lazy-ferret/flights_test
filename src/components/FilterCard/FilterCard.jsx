import React, { useEffect, useState } from 'react';
import { FilterCardWrapper } from './FilterCard.styles';
import TransferFilter from './TransferFilter/TransferFilter';
import PriceFilter from './PriceFilter/PriceFilter';
import CarrierFilter from './CarrierFilter/CarrierFilter';
import { useFilterStore } from '../../stores/filterStore';

const FilterCard = ({ title, type }) => {
  const { setTransferFilter, setMinPriceFilter, setMaxPriceFilter, setCarrierFilter } = useFilterStore(state => state);

  const [transfers, setTransfers] = useState([]);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [carriers, setCarriers] = useState([]);

  const handleTransferChange = (e) => {
    const value = e.target.name === 'transfer_true' ? 1 : 0;
    if (e.target.checked) {
      setTransfers(transfers => [...transfers, value]);
    } else {
      setTransfers(transfers => transfers.filter(item => item !== value));
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    e.target.name === 'minPrice' ? setMinPrice(value) : setMaxPrice(value);
  };

  const handleCarrierChange = (e) => {
    const value = e.target.name;
    if (e.target.checked) {
      setCarriers(carriers => [...carriers, value]);
    } else {
      setCarriers(carriers => carriers.filter(item => item !== value));
    }
  };

  useEffect(() => {
    setTransferFilter(transfers);
  }, [transfers]);

  useEffect(() => {
    setMinPriceFilter(minPrice);
  }, [minPrice]);

  useEffect(() => {
    setMaxPriceFilter(maxPrice);
  }, [maxPrice]);

  useEffect(() => {
    setCarrierFilter(carriers);
  }, [carriers]);

  return (
    <FilterCardWrapper  >
      {title}
      {type === 'transfer' && <TransferFilter onChange={handleTransferChange} />}
      {type === 'price' && <PriceFilter onChange={handlePriceChange}
        minPrice={minPrice}
        maxPrice={maxPrice} />}
      {type === 'carrier' && <CarrierFilter onChange={handleCarrierChange} />}
    </FilterCardWrapper >
  );
};

export default FilterCard;
