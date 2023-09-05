import styled from 'styled-components';

export const CarrierLogoWrapper = styled.div`
    background-image: ${props => `url('https://pics.avs.io/100/100/${props.$uid}.png')` }; 
    background-size: cover;
    background-repeat: no-repeat;
    height: 80px;
    width: 80px;
`;

