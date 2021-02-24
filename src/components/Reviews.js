import React from 'react';
import styled from 'styled-components';
import placeholder from './images/placeholder.png';
import logo from './images/logo.jpeg';

const StyledDiv = styled.div`
width: 100vw;
background: url(${placeholder});
background-size: contain;
background-repeat: no-repeat;
height: 1000px;

`; 

const StyledH3 = styled.h3`
    background: linear-gradient(0deg, #00000088 100%, #ffffff44 30%);
    height: 100%;
    color: white;

`;

function Reviews() {
    return (
        <StyledDiv> 
            <StyledH3>testimonials</StyledH3>
        </StyledDiv>
    )
}

export default Reviews;