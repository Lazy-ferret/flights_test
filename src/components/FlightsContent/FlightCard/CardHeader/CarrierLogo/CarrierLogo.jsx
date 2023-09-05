import React from 'react';
import { CarrierLogoWrapper } from './CarrierLogo.styles';

function CarrierLogo({ carrierUid }) {
  const uid = carrierUid.substring(0, 2);

  return (
    <CarrierLogoWrapper $uid={uid} >
    </CarrierLogoWrapper>
  );
}

export default CarrierLogo;
