import { createStore } from './createStore';

export const useFlightsStore = createStore(
  (set) => ({
    flights: null,
    setFlights: (flightsData) => set({ flights: flightsData.result.flights }),
    removeFlights: () => set({ flights: null }),
  }), 'Flights');
