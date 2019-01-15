import React, { Component } from 'react'
import styled from 'styled-components';
import ContainerStyle from './styles/ContainerStyle';

const SectionStyles = styled.section`
    padding-top: ${props => props.theme.padding};
    padding-bottom: ${props => props.theme.padding};
`;


const Section = ({children}) => (
    <SectionStyles as={ContainerStyle}>
        {children}
    </SectionStyles>
);

export default Section;