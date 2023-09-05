import styled from 'styled-components';

export const CarrierFilterWrapper = styled.div`
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: start; 
    font-size: 13px;
    font-weight: 400;
    & div {
        display: flex;
        height: 18px;
    }
    & label {    
        width: 140px;
        text-align: start;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding-bottom: 2px;
        margin-right: 10px;
        
    }
`;
