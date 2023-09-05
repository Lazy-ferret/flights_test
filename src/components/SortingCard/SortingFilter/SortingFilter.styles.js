import styled from 'styled-components';

export const SortingFilterWrapper = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;

    align-items: start; 
    font-size: 13px;
    font-weight: 400;
    &:last-child > label {
        height: 16px
    }
`;
