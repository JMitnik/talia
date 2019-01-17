import React, { Component } from 'react';
import styled from 'styled-components';
import Container from './styles/Container';


const HeaderStyle = styled.header`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-height: 40vh;
    background: ${props => props.background ? `url(${props.background})` :props.theme.defaultColor };
    align-items: flex-end;
    padding-bottom: ${props => props.theme.gutter};
    font-family: ${props => props.theme.mainFont};

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 1.7rem;
    }
`;

const Header = ({ backgroundImage, children }) => (
    <HeaderStyle background={backgroundImage}>
        <Container>
            <div>{children}</div>
        </Container>
    </HeaderStyle>
);

export default Header;