import styled from 'styled-components';

export const MainHeading = styled.span`
    position: relative;
    max-width: 600px;
    font-family: ${props => props.theme.titleFont};
`;

export const SubHeading = styled(MainHeading)`
    font-size: 2.5rem;
`;

export const PlayHeading = styled(MainHeading)`
    font-size: 1.5rem;
    font-family: ${props => props.theme.playFont};

    &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        width: 20px;
        height: 2px;
        background: ${props => props.theme.gradients.primary};

    }

    &:before {
        left: -10px;
        transform: translateX(-100%) translateY(-50%);
    }

    &:after {
        right: -10px;
        transform: translateX(100%) translateY(-50%);
    }
`