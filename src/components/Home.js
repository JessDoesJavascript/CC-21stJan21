import React from 'react';
import styled from 'styled-components';
import placeholder from './images/placeholder.png';
import logo from './images/logo.jpeg';

const StyledDiv = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center; 

`;

const StyledLogo = styled.img`
    width: 40%;
    

`;

function Home() {
    return (
        <StyledDiv> 
            <StyledLogo src={logo} alt="Logo"></StyledLogo>
        </StyledDiv>
    )
}

export default Home;