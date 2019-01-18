import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    /* @font-face {
        font-family: 'Catamaran';
    } */

    @font-face {
        font-family: 'Amatic SC', cursive;
        src: url('https://fonts.googleapis.com/css?family=Amatic+SC');
    }

    html, body {
        margin: 0;
        padding: 0;
        font-family: 'Quicksand';
    }

    html, body, * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;
