import React from 'react';
import { TimeDetailsWrapper } from './TimeDetails.styles';
import FlightTime from './FlightTime/FlightTime';
import FlightDate from './FlightDate/FlightDate';
import FlightDuration from './FlightDuration/FlightDuration';

function TimeDetails({ flightData }) {
  const departureData = flightData.segments[0];
  const arrivalData = flightData.segments[flightData.segments.length - 1];
  const flightDuration = flightData.duration;

  const departureDate = departureData.departureDate;
  const arrivalDate = arrivalData.arrivalDate;

  const getTime = (data) => {
    const date = new Date(data);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const getDate = (data) => {
    const date = new Date(data);
    const monthDate = date.toLocaleDateString('ru', { day: 'numeric', month: 'short' });
    const weekday = date.toLocaleDateString('ru', { weekday: 'short' });
    return `${monthDate} ${weekday}`;
  };

  const getDuration = (duration) => {
    let hours = Math.floor(duration / 60).toString().padStart(2, '0');
    const minutes = (duration % 60).toString().padStart(2, '0');
    const days = hours < 24 ? null : Math.floor(hours / 24).toString();
    if (days) hours = (hours % 24).toString().padStart(2, '0');
    return days
      ? `${days} д ${hours} ч ${minutes} мин`
      : `${hours} ч ${minutes} мин`;
  };

  return (
    <TimeDetailsWrapper >
      <FlightDuration duration={getDuration(flightDuration)} />
      <div>
        <FlightTime time={getTime(departureDate)} />
        <FlightDate date={getDate(departureDate)} />
      </div>
      <div>
        <FlightDate date={getDate(arrivalDate)} />
        <FlightTime time={getTime(arrivalDate)} />
      </div>
    </TimeDetailsWrapper>
  );
}

export default TimeDetails;
