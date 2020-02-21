import React from "react";
import styled from 'styled-components';

const StyledImage = styled.img`
    width:60vw;
    height:40vh;
    margin: 2%;
    border: none;
    border-radius: 10px;
    `;

const Image = ({ image }) => {
    return <StyledImage alt='The Fastest Rotating Galaxy Known' src={image} />
};

export default Image;