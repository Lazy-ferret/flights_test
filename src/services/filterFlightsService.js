export const filterByTransfer = (arrFlights, arrTransfers) => {
  const filteredArrFlights = arrFlights
    .filter(flight =>
      arrTransfers.includes(flight.flight.legs[0].segments.length - 1));
  return filteredArrFlights;
};

export const filterByMinPrice = (arrFlights, minPrice) => {
  const filteredArrFlights = arrFlights
    .filter(flight =>
      Number(flight.flight.price.total.amount) >= minPrice);
  return filteredArrFlights;
};

export const filterByMaxPrice = (arrFlights, maxPrice) => {
  const filteredArrFlights = arrFlights
    .filter(flight =>
      Number(flight.flight.price.total.amount) <= maxPrice);
  return filteredArrFlights;
};

export const filterByCarrier = (arrFlights, arrCarriers) => {
  const filteredArrFlights = arrFlights
    .filter(flight =>
      arrCarriers.includes(flight.flight.carrier.caption));
  return filteredArrFlights;
};
