import styled from 'styled-components';

const ContainerStyle = styled.div`
    display: flex;
    max-width: ${props => props.theme.containerWidthLg};
    margin: 0 auto;
    width: 100%;
    padding-left: ${props => props.theme.gutter};
    padding-right: ${props => props.theme.gutter};
`;

export default ContainerStyle;