import React, { Component } from 'react'
import styled from 'styled-components';

const LabelStyles = styled.span`
    background: ${prop => prop.backgroundColor ? prop.backgroundColor : prop.theme.defaultColor};
`;

const Label = ({children}) => (
    <LabelStyles>
        {children}
    </LabelStyles>
);

export default Label;