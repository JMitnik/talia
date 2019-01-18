import React, { Component } from 'react';
import styled from 'styled-components';
import Container from './styles/Container';
import profile from '../img/talia-bg.png';

const HeaderStyle = styled.header`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-height: 50vh;
    background: ${props => props.theme.defaultColor} no-repeat;
    align-items: flex-end;
    padding-bottom: ${props => props.theme.gutter};
    font-family: ${props => props.theme.titleFont};
    overflow: hidden;
    position: relative;

    @supports(--webkit-text-fill-color: transparent) {
        h1 {
            background: ${props => props.theme.gradients.primary};
            -webkit-text-fill-color: transparent;
            -webkit-background-clip: text;
        }
    }

    img {
        position: absolute;
        width: 40%;
        bottom: 0;
        right: 0;
        filter: grayscale(70%);
        opacity: 0.2;
    }

    h1 {
        font-size: 3rem;
    }

    h2 {
        font-size: 1.7rem;
    }

    .text-playful {
        font-family: ${props => props.theme.playFont};
    }
`;

const Header = ({ backgroundImage, children }) => (
    <HeaderStyle background={backgroundImage}>
        <Container>
            <div>{children}</div>
        </Container>

        <img src={profile}/>
    </HeaderStyle>
);

export default Header;