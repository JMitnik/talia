import styled, { css } from 'styled-components';

const Container = styled.div`
    display: flex;
    max-width: ${props => props.theme.containerWidthLg};
    margin: 0 auto;
    width: 100%;
    flex-wrap: wrap;
    padding-left: ${props => props.theme.gutter};
    padding-right: ${props => props.theme.gutter};

    /* If Centered text */
    ${props => props.center && css`
        text-align: center;
        justify-content: center;

        h1, h2, h3, h4 {
            text-align: center;
        }
    `}

    /* If Right-aligned text */
    ${props => props.right && css`
        text-align: right;
        justify-content: right;


        h1, h2, h3, h4 {
            text-align: right;
        }
        
    `}
`;

export default Container;