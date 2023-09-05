import React from 'react';
import { RouteDetailsWrapper } from './RouteDetails.styles';

const RouteDetails = ({ flightData }) => {
  const departureData = flightData.segments[0];
  const arrivalData = flightData.segments.toReversed()[0];

  const departureCity = departureData.departureCity
    ? departureData.departureCity.caption
    : null;
  const departureAirport = departureData.departureAirport.caption;
  const departureAirportUid = departureData.departureAirport.uid;

  const arrivalCity = arrivalData.arrivalCity
    ? arrivalData.arrivalCity.caption
    : null;
  const arrivalAirport = arrivalData.arrivalAirport.caption;
  const arrivalAirportUid = arrivalData.arrivalAirport.uid;

  const getRouteView = (city, airport, airportUid) => {
    return (
      <>
        {city && <div>{city}, </div>}
        {airport && <div>{airport} </div>}
        {airportUid && <span> ({airportUid})</span>}
      </>
    );
  };

  return (
    <RouteDetailsWrapper >
      {getRouteView(departureCity, departureAirport, departureAirportUid)}
      <span>→</span>
      {getRouteView(arrivalCity, arrivalAirport, arrivalAirportUid)}
    </RouteDetailsWrapper>
  );
};

export default RouteDetails;
