import { createStore } from './createStore';

export const useSortingStore = createStore(
  (set) => ({
    sortingMethod: null,
    setSortingMethod: (method) => set({ sortingMethod: method }),
    removeSortingMethod: () => set({ sortingMethod: null }),
  }), 'Sorting');
