import React, { Component } from 'react';
import styled from 'styled-components';
import ContainerStyle from './styles/ContainerStyle';


const HeaderStyle = styled.header`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-height: 40vh;
    background: ${props => props.theme.primaryColor};
    align-items: flex-end;
    padding-bottom: ${props => props.theme.gutter};
`;

const Header = (props) => (
    <HeaderStyle>
        <ContainerStyle>
            <div>{props.children}</div>
        </ContainerStyle>
    </HeaderStyle>
);

export default Header;