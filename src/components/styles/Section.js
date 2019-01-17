import React, { Component } from 'react'
import styled, { css } from 'styled-components';
import Container from './Container';

const SectionStyles = styled(Container)`
    padding-top: ${props => props.theme.gutter};
    padding-bottom: ${props => props.theme.gutter};
    display: flex;
    flex-wrap: wrap;

    > * {
        flex: 100%;
    }
`;

const Section = ({children, ...props}) => (
    <SectionStyles as="section" {...props}>
        {children}
    </SectionStyles>
);

export default Section;