import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: Inter, sans-serif;

    font-style: normal;        
    font-size: 18px;
    line-height: 24.2px;
    text-align: center;
    vertical-align: middle;
    color: #1c1c1c; 
    overflow-wrap: break-word;    
},
#root {
    display: flex;
    align-items: start; 
}
`;

export default GlobalStyle;
