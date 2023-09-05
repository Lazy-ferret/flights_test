import React from 'react';
import { SortingCardWrapper } from './SortingCard.styles';
import SortingFilter from './SortingFilter/SortingFilter';

const SortingCard = ({ title, onChange }) => {

  return (
    <SortingCardWrapper  >
      {title}
      <SortingFilter onChange={onChange} />
    </SortingCardWrapper >
  );
};

export default SortingCard;
