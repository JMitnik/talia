import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: ${props => props.theme.pr}
    }
`;

export default GlobalStyles;