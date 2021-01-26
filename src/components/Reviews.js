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
opacity: 50%
`;

function Reviews() {
    return (
        <StyledDiv> 

        </StyledDiv>
    )
}

export default Reviews;