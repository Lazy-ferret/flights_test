import { createStore } from './createStore';

export const useCurrentFlightStore = createStore(
  (set) => ({
    currentFlight: null,
    setCurrentFlight: (flight) => set({ currentFlight: flight }),
    removeCurrentFlight: () => set({ currentFlight: null }),
  }), 'Current Flight');
