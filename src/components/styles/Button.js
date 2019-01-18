import styled, { css } from 'styled-components';

const Button = styled.button`
    border: 0;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: ${props => props.theme.bodyTextColor};
    background: ${props => props.theme.defaultColor};
    font-family: ${props => props.theme.mainFont};
    border-radius: ${props => props.theme.borderRadius};

    ${props => props.primary && css`
        background: ${props => props.theme.gradients.primary};
        color: white;
    `}

    ${props => props.secondary && css`
        /* background: ${props => props.theme.secondary}; */
        color: white;
    `}

    ${props => props.lg && css`
        font-size: 1.2rem;
    `};

    ${props => props.xl && css`
        font-size: 2rem;
    `};

    &.non-active {
        background: ${props => props.theme.defaultColor};
        color: ${props => props.theme.bodyTextColor};
    }
`;

export default Button;