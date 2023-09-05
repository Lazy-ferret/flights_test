import { createStore } from './createStore';

export const useFilterStore = createStore(
  (set) => ({
    transfer: null,
    minPrice: null,
    maxPrice: null,
    carrier: null,
    setTransferFilter: (value) => set(value.length > 0 ? { transfer: value } : { transfer: null }),
    setMinPriceFilter: (value) => set(value > 0 ? { minPrice: value } : { minPrice: null }),
    setMaxPriceFilter: (value) => set(value > 0 ? { maxPrice: value } : { maxPrice: null }),
    setCarrierFilter: (value) => set(value.length > 0 ? { carrier: value } : { carrier: null }),
    removeFilters: () => set({
      transfer: null,
      minPrice: null,
      maxPrice: null,
      carrier: null
    }),
  }), 'Filters');
