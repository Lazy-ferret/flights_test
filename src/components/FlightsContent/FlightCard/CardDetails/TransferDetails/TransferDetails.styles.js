import styled from 'styled-components';

export const TransferDetailsWrapper = styled.div`
  margin: 0px 55px;
  border-bottom: 1px solid #d9d9d9;
  position: relative;
  & span {
    position: absolute;
    z-index: 99;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ffffff;
    font-size: 16px;
    color: #ffb168;
    padding: 0 8px;
}
`;
