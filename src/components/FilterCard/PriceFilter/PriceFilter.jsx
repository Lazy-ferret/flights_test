import React from 'react';
import { PriceFilterWrapper } from './PriceFilter.styles';

const PriceFilter = ({ minPrice, maxPrice, onChange }) => {
  return (
    <PriceFilterWrapper >
      <label>
        От <input type='number'
          name='minPrice'
          value={minPrice}
          onChange={onChange} />
      </label>
      <label>
        До <input type='number'
          name='maxPrice'
          value={maxPrice}
          onChange={onChange} />
      </label>
    </PriceFilterWrapper>
  );
};

export default PriceFilter;
