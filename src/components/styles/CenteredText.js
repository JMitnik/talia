import styled, { css } from 'styled-components';

const CenteredText = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: ${props => props.theme.textContainer};
    justify-content: center;

    h3, h4 {
        text-align: center;
    }
`;

export default CenteredText;