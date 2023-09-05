import React, { useEffect } from 'react';
import { FiltersContainerWrapper } from './FiltersContainer.styles';
import SortingCard from '../SortingCard/SortingCard';
import FilterCardsList from './FiterCardsList/FilterCardsList';
import { useSortingStore } from '../../stores/sortingStore';

function FiltersContainer() {
  const {
    setSortingMethod,
    removeSortingMethod
  } = useSortingStore(state => state);

  const handleSortingChange = (e) => {
    setSortingMethod(e.target.value);
  };

  useEffect(() => {
    return () => removeSortingMethod();
  }, []);

  return (
    <FiltersContainerWrapper >
      <SortingCard title='Сортировать' onChange={handleSortingChange} />
      <FilterCardsList />
    </FiltersContainerWrapper>
  );
}

export default FiltersContainer;
