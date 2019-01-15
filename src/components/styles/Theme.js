import { injectGlobal } from 'styled-components';

injectGlobal`
    @font-face {
        font-family: 'MontSerrat';
        src: url('https://fonts.googleapis.com/css?family=Montserrat');
    }
`;

const Theme = {
    primaryColor: '#ddd',
    secondaryColor: 'red',
    containerWidthLg: '1344px',
    gutter: '30px',
    mainFont: 'MontSerrat'
};


export default Theme;