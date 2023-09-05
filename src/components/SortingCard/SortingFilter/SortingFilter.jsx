import React from 'react';
import { SortingFilterWrapper } from './SortingFilter.styles';

const SortingFilter = ({ onChange }) => {
  return (
    <SortingFilterWrapper >
      <>
        <label>
          <input type='radio' name='sortFlights' value='byPriceAscend' onChange={onChange} />
          - по возрастанию цены
        </label>
        <label>
          <input type='radio' name='sortFlights' value='byPriceDescend' onChange={onChange} />
          - по убыванию цены
        </label>
        <label>
          <input type='radio' name='sortFlights' value='byDuration' onChange={onChange} />
          - по времени в пути
        </label>
      </>
    </SortingFilterWrapper>
  );
};

export default SortingFilter;
