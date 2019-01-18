import React, { Component } from 'react'
import styled from 'styled-components';

const Paragraph = styled.article`
    text-align: inherit;
    font-family: ${props => props.theme.mainFont};
    max-width: 600px;
`;

export default Paragraph;