import React from 'react';
import { TransferFilterWrapper } from './TransferFilter.styles';

const TransferFilter = ({ onChange }) => {
  return (
    <TransferFilterWrapper >
      <label>
        <input type='checkbox' name='transfer_true' onChange={onChange} />
        - 1 пересадка
      </label>
      <label>
        <input type='checkbox' name='transfer_false' onChange={onChange} />
        - без пересадок
      </label>
    </TransferFilterWrapper>
  );
};

export default TransferFilter;
