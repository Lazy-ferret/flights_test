import React from 'react';
import { FilterCardsListWrapper } from './FilterCardsList.styles';
import FilterCard from '../../FilterCard/FilterCard';

const FilterCardsList = () => {

  return (
    <FilterCardsListWrapper >
      <FilterCard title='Фильтровать' type='transfer' />
      <FilterCard title='Цена' type='price' />
      <FilterCard title='Авиакомпании' type='carrier' />
    </FilterCardsListWrapper>
  );
};

export default FilterCardsList;
