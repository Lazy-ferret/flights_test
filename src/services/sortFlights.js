export const sortFlights = (arr, method) => {
  const temp = structuredClone(arr);

  const compare = () => {
    if (method === 'byPriceAscend') {
      return (a, b) => Number(a.flight.price.total.amount) > Number(b.flight.price.total.amount) ? 1 : -1;
    } else if (method === 'byPriceDescend') {
      return (a, b) => Number(a.flight.price.total.amount) < Number(b.flight.price.total.amount) ? 1 : -1;
    } else {
      return (a, b) => Number(a.flight.legs[0].duration) > Number(b.flight.legs[0].duration) ? 1 : -1;
    }
  };
  temp.sort(compare());

  return (temp);
};
