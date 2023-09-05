import React from 'react';
import { TransferDetailsWrapper } from './TransferDetails.styles';

const TransferDetails = ({ flightData }) => {
  const transfersQuantity = flightData.segments.length - 1;
  let wordEnding = 'ка';
  if (transfersQuantity !== 1) {
    wordEnding = transfersQuantity > 4 ? 'ок' : 'ки';
  }

  return (
    <TransferDetailsWrapper >
      {(transfersQuantity > 0) &&
        <span>{`${transfersQuantity} пересад${wordEnding}`}</span>}
    </TransferDetailsWrapper>
  );
};

export default TransferDetails;
